import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KakaoApiService } from './kakao-api/kakao-api.service';
import { KakaoApiController } from './kakao-api/kakao-api.controller';
import { AppController } from './app.controller';
import { TimeController } from './time/time.controller';
import { TimeService } from './time/time.service';

@Module({
  controllers: [AppController, KakaoApiController, TimeController],
  providers: [AppService, KakaoApiService, TimeService],
})
export class AppModule {}
