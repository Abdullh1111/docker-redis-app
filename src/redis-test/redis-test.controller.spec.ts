import { Test, TestingModule } from '@nestjs/testing';
import { RedisTestController } from './redis-test.controller';
import { RedisTestService } from './redis-test.service';

describe('RedisTestController', () => {
  let controller: RedisTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RedisTestController],
      providers: [RedisTestService],
    }).compile();

    controller = module.get<RedisTestController>(RedisTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
