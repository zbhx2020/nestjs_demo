import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

/*
 * @Description: Something
 * @Version: 1.0
 * @Autor: yu
 * @Date: 2020-04-01 17:32:51
 * @LastEditors: yu
 * @LastEditTime: 2020-04-01 17:46:43
 */
@Catch()
export class AnyExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: '捕获任意异常',
    });
  }
}
