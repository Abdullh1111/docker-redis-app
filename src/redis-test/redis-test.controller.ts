import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CreateRedisTestDto } from './dto/create-redis-test.dto';
import { UpdateRedisTestDto } from './dto/update-redis-test.dto';
import { RedisTestService } from './redis-test.service';

@Controller('redis-test')
export class RedisTestController {
  constructor(
    private readonly redisTestService: RedisTestService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {
    Logger.log('CacheManager injected:', typeof this.cacheManager);
  }

  @Post()
  create(@Body() createRedisTestDto: CreateRedisTestDto) {
    return this.redisTestService.create(createRedisTestDto);
  }

  @Get()
  async findAll() {
    const posts = await this.cacheManager.get('posts');
    console.log(posts);
    if (posts) return { cached: 'true', data: posts };
    const result = await this.redisTestService.findAll();
    await this.cacheManager.set('posts', result);
    console.log(await this.cacheManager.get('posts'));
    return { cached: 'false', data: result };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.redisTestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRedisTestDto: UpdateRedisTestDto,
  ) {
    return this.redisTestService.update(+id, updateRedisTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.redisTestService.remove(+id);
  }
}
