import { Controller, Get } from '@nestjs/common';
import { TimeService } from './time.service';

@Controller('time')
export class TimeController {
  constructor(private readonly TimeService: TimeService) {}

  @Get('Duration')
  getDirection() {
    return this.TimeService.getDuration();
  }
}
