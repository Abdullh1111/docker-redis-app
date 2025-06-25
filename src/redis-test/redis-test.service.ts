import { Injectable } from '@nestjs/common';
import { CreateRedisTestDto } from './dto/create-redis-test.dto';
import { UpdateRedisTestDto } from './dto/update-redis-test.dto';

@Injectable()
export class RedisTestService {
  create(createRedisTestDto: CreateRedisTestDto) {
    return 'This action adds a new redisTest';
  }

  findAll() {
    return `This action returns all redisTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} redisTest`;
  }

  update(id: number, updateRedisTestDto: UpdateRedisTestDto) {
    return `This action updates a #${id} redisTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} redisTest`;
  }
}
