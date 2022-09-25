import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StatusService } from './status/status.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly statusService: StatusService) {}

  @Get('status')
  getHello(): string {
    return JSON.stringify(this.statusService.create());
  }
}
