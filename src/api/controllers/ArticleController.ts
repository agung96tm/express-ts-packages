import { Body, Delete, Get, HttpCode, JsonController, Patch, Post } from 'routing-controllers';
import { Service } from 'typedi';
import { ArticleCreateRequest, ArticleUpdateRequest } from '../dto/ArticleDto';

@Service()
@JsonController('/articles')
export class MainController {
  @Get('/')
  list(): any[] {
    return [];
  }

  @Get('/:id')
  detail(): { [key: string]: any } {
    return {
      id: 1,
    };
  }

  @Post('/')
  @HttpCode(201)
  create(@Body() articleReq: ArticleCreateRequest): { [key: string]: any } {
    return articleReq;
  }

  @Patch('/:id')
  update(@Body() articleReq: ArticleUpdateRequest): { [key: string]: any } {
    return articleReq;
  }

  @Delete('/:id')
  @HttpCode(204)
  delete(): any {
    return null;
  }
}
