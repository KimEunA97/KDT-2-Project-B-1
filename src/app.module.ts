import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as fs from 'fs';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{ provide: 'fs', useValue: fs }, AppService],
})
export class AppModule {}
