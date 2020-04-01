import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

/*
 * @Description: Something
 * @Version: 1.0
 * @Autor: yu
 * @Date: 2020-04-01 17:44:41
 * @LastEditors: yu
 * @LastEditTime: 2020-04-01 17:49:26
 */
@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    super.catch(exception, host);
    console.log('捕获所有异常')
  }
}
