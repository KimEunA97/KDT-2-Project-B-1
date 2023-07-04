import axios from 'axios';
import cheerio, {CheerioElement, CheerioAPI} from 'react-native-cheerio';

//  지역명과 음식명을 받아서 맛집정보를 반환할 예정
export const axiosTest = async (local: String, food: String) => {
  interface PlaceInfo {
    place: string;
    star: string;
  }

  // fetch와 같은 HTTP요청 라이브러리
  try {
    //
    const response = await axios.get(
      `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${encodeURIComponent(
        `${local}+${food}+맛집`,
      )}`,
    );

    // 응답받은 데이터를 읽고, $에 담는다.
    const $ = cheerio.load(response.data);

    // 데이터 추출값을 담기 위한 배열
    const placeInfos: PlaceInfo[] = [];

    // 네이버 검색 결과에서 필요 정보부분으로 확인한 해당 부분의 요소로 장소 및 별점을 배열에 담는다.
    $('div.CHC5F').each((index: number, element: CheerioAPI) => {
      // 장소 이름 -> 해당 요소 중에 자식을 찾아서 추출
      const place = $(element).find('span.place_bluelink.TYaxT').text();
      // 해당 지점 별점 -> 해당 요소 중에 자식을 찾아서 추출
      const star = $(element).find('span.h69bs.a2RFq').text();

      // 장소 및 별점으로 배열에 객체형식으로 담기
      placeInfos.push({place, star});
    });

    console.log(placeInfos);
  } catch (err) {
    console.log(err);
  }
};
