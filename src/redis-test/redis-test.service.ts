import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/utils/prisma/prisma.service';
import { CreateRedisTestDto } from './dto/create-redis-test.dto';
import { UpdateRedisTestDto } from './dto/update-redis-test.dto';

@Injectable()
export class RedisTestService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createRedisTestDto: CreateRedisTestDto) {
    try {
      return await this.prisma.post.create({
        data: createRedisTestDto,
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        error?.meta?.cause || error?.message || 'Failed to create post',
      );
    }
  }

  findAll() {
    try {
      return this.prisma.post.findMany();
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        error?.meta?.cause || error?.message || 'Failed to get posts',
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} redisTest`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateRedisTestDto: UpdateRedisTestDto) {
    return `This action updates a #${id} redisTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} redisTest`;
  }
}
