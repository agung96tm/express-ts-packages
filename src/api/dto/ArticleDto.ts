import { IsNotEmpty, IsString, MinLength, MaxLength, IsOptional } from 'class-validator';

export class ArticleCreateRequest {
  @MinLength(10)
  @IsString()
  @IsNotEmpty()
  title: string;

  @MaxLength(2000)
  @MinLength(10)
  @IsString()
  @IsNotEmpty()
  body: string;
}

export class ArticleUpdateRequest {
  @IsOptional()
  @MinLength(10)
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @MaxLength(2000)
  @MinLength(10)
  @IsString()
  @IsNotEmpty()
  body: string;
}
