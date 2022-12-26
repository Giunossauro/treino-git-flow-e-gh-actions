import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
    
    it('should return "Flow World!"', () => {
      expect(appController.getFlow()).toBe('Flow World!');
    });
    
    it('should return "Flow 2 World!"', () => {
      expect(appController.getFlow2()).toBe('Flow 2 World!');
    });
    
    it('should return "Flow 3 World!"', () => {
      expect(appController.getFlow3()).toBe('Flow 3 World!');
    });
    
    it('should return "Flow 4 World!"', () => {
      expect(appController.getFlow4()).toBe('Flow 4 World!');
    });/* 
    
    it('should return "Flow 5 World!"', () => {
      expect(appController.getFlow5()).toBe('Flow 5 World!');
    }); */
  });
});
