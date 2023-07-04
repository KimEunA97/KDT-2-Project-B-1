import { Body, Controller, Post } from '@nestjs/common';
import { axiosTest } from 'cute/model/crawling';

@Controller()
export class AppController {
  @Post('inputData')
  async handleInputData(
    @Body('value') value: string,
  ): Promise<{ status: string }> {
    try {
      await axiosTest();
      console.log('입력한 input 정보 : ', value);
      return { status: '정보를 성공적으로 받아왔습니다.' };
    } catch (error) {
      console.error('정보를 받아오는데 실패했습니다.', error);
    }
  }
}
