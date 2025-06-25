import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisTestModule } from './redis-test/redis-test.module';
import { PrismaModule } from './utils/prisma/prisma.module';

@Module({
  imports: [RedisTestModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
