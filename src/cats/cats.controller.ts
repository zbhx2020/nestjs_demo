/*
 * @Description: Something
 * @Version: 1.0
 * @Autor: yu
 * @Date: 2020-04-01 14:04:03
 * @LastEditors: yu
 * @LastEditTime: 2020-04-01 17:49:41
 */
import {
  Controller,
  Get,
  Req,
  Post,
  Param,
  Body,
  Query,
  Put,
  Delete,
  HttpException,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from '../exceptions/forbidden.exception';
import { HttpExceptionFilter } from 'src/exceptions/http-exception.filter';
import { AnyExceptionsFilter } from 'src/exceptions/any-exception.filter';
import { AllExceptionsFilter } from 'src/exceptions/all-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UseFilters(AllExceptionsFilter)
  async create(@Body() CreateCatDto: CreateCatDto) {
    // this.catsService.create(CreateCatDto);
    throw new ForbiddenException();
  }

  @Get()
  findAll() {
    // throw new HttpException(
    //   { status: HttpStatus.FORBIDDEN, error: '出错了！！！' },
    //   403,
    // );
    throw new ForbiddenException();
  }
  // @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catsService.findAll();
  // }
  //   @Get()
  //   async findAll(): Promise<any[]>{
  //       return [];
  //   }
  //   @Get()
  //   findAll(@Req() request: Request): string {
  //     return '这个操作返回所有猫';
  //   }

  //   @Get(':id')
  //   findOne(@Param() params): string{
  //       console.log(params.id)
  //       return '这个操作返回一个编号为 #${params.id} 的猫'
  //   }

  // @Get(':id')
  // findOne(@Param('id') id): string {
  //   return `这个操作返回一个编号为 #${id} 的猫`;
  // }

  // @Put(':id')
  // update(@Param('id') id:string, @Body() updateCatDto: UpdateCatDto){
  //   return `这个操作更新编号为 #${id} 的猫`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id:string){
  //   return `这个操作删除编号为 #${id}的猫`;
  // }
}
