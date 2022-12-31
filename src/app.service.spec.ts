import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(appService).toBeDefined();
  });
  
  it('should return "Hello Worldeeeeeeee!"', () => {
    expect(appService.getHello()).toBe('Hello Worldeeeeeeee!');
  });
  
  it('should return "Flow World!"', () => {
    expect(appService.getFlow()).toBe('Flow World!');
  });
  
  it('should return "Flow 2 World!"', () => {
    expect(appService.getFlow2()).toBe('Flow 2 World!');
  });
  
  it('should return "Flow 3 World!"', () => {
    expect(appService.getFlow3()).toBe('Flow 3 World!');
  });
  
  it('should return "Flow 4 World!"', () => {
    expect(appService.getFlow4()).toBe('Flow 4 World!');
  });
  
  it('should return "Flow 5 World!"', () => {
    expect(appService.getFlow5()).toBe('Flow 5 World!');
  });
});
