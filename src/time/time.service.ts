import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TimeService {
  private kakao_api_key = '9d667c01eb07e9f64c1df5d6156dbbf2'; // 카카오 API 키
  private origin = '127.3937,36.3399'; // 출발지
  private destination = '127.4332,36.3521'; // 목적지

  async getDuration(): Promise<any> {
    const url = `https://apis-navi.kakaomobility.com/v1/directions?origin=${this.origin}&destination=${this.destination}`;
    const headers = {
      Authorization: `KakaoAK ${this.kakao_api_key}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.get(url, { headers });
      const data = response.data; // 응답 데이터
      const duration = data.routes[0].sections[0].duration;
      const distance = data.routes[0].sections[0].distance;
      console.log(duration, distance);
      return { duration, distance }; // 객체로 값을 반환
    } catch (error) {
      console.error(`Error: ${error}`);
      return null;
    }
  }
}
