import { Module } from '@nestjs/common';
import { RedisTestService } from './redis-test.service';
import { RedisTestController } from './redis-test.controller';

@Module({
  controllers: [RedisTestController],
  providers: [RedisTestService],
})
export class RedisTestModule {}
