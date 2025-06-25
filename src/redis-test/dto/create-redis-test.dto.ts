import { IsString } from 'class-validator';

export class CreateRedisTestDto {
  @IsString()
  name: string;

  @IsString()
  content: string;

  @IsString()
  authorName: string;

  @IsString()
  authorNickname: string;
}
