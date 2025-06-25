import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRedisTestDto } from './dto/create-redis-test.dto';
import { UpdateRedisTestDto } from './dto/update-redis-test.dto';
import { RedisTestService } from './redis-test.service';

@Controller('redis-test')
export class RedisTestController {
  constructor(private readonly redisTestService: RedisTestService) {}

  @Post()
  create(@Body() createRedisTestDto: CreateRedisTestDto) {
    return this.redisTestService.create(createRedisTestDto);
  }

  @Get()
  findAll() {
    return this.redisTestService.findAll();
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
