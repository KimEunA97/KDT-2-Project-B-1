import { Body, Controller, Post, Get } from '@nestjs/common';
import { KakaoApiService } from './kakao-api/kakao-api.service';
import { AppService } from './app.service';
import { axiosTest } from 'cute/model/crawling';

@Controller()
export class AppController {
  constructor(
    private readonly kakaoApi: KakaoApiService,
    private readonly appService: AppService,
  ) {}

  @Get()
  getDirections(): Promise<void> {
    return this.kakaoApi.getDuration();
  }

  @Get()
  async performTask(): Promise<string> {
    // const url = 'https://api.example.com/data';
    // const outputPath = './data.json';
    await this.appService.getHello();
    return 'Data fetched and saved!';
  }
  @Get()
  getDirections(): Promise<void> {
    return this.kakaoApi.getDuration();
  }

  @Get()
  async performTask(): Promise<string> {
    // const url = 'https://api.example.com/data';
    // const outputPath = './data.json';
    await this.appService.getHello();
    return 'Data fetched and saved!';
  }
}
