/*
 * @Description: 异常过滤器
 * @Version: 1.0
 * @Autor: yu
 * @Date: 2020-04-01 17:02:37
 * @LastEditors: yu
 * @LastEditTime: 2020-04-01 17:10:05
 */

import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';

import {Request, Response} from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
