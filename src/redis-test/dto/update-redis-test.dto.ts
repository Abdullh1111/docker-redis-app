import { PartialType } from '@nestjs/mapped-types';
import { CreateRedisTestDto } from './create-redis-test.dto';

export class UpdateRedisTestDto extends PartialType(CreateRedisTestDto) {}
