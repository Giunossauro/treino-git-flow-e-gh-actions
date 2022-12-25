import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("flow")
  getFlow(): string {
    return this.appService.getFlow();
  }

  @Get("flow2")
  getFlow2(): string {
    return this.appService.getFlow2();
  }

  @Get("flow3")
  getFlow3(): string {
    return this.appService.getFlow3();
  }

  @Get("flow4")
  getFlow4(): string {
    return this.appService.getFlow4();
  }

  @Get("flow5")
  getFlow5(): string {
    return this.appService.getFlow5();
  }
}
