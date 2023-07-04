import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KakaoApiService } from './kakao-api/kakao-api.service';
import { KakaoApiController } from './kakao-api/kakao-api.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as fs from 'fs';

@Module({
  imports: [],
  controllers: [AppController, KakaoApiController],
  providers: [{ provide: 'fs', useValue: fs }, AppService, KakaoApiService],
})
export class AppModule {}
