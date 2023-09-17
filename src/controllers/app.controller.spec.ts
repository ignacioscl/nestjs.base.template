import { Test, TestingModule } from '@nestjs/testing';
import { AppPublicController } from './app.public.controller';
import { AppService } from '../services/app.service';

describe('AppController', () => {
  let appController: AppPublicController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppPublicController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppPublicController>(AppPublicController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
