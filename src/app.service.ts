import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  getFlow(): string {
    return 'Flow World!';
  }
  
  getFlow2(): string {
    return 'Flow 2 World!';
  }
}