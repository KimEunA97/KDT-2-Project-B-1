import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AppController {
  @Post('inputData')
  handleInputData(@Body('value') value: string): { status: string } {
    try {
      console.log('입력한 input 정보 : ', value);
      return { status: '정보를 성공적으로 받아왔습니다.' };
    } catch (error) {
      console.error('정보를 받아오는데 실패했습니다.', error);
    }
  }
}
