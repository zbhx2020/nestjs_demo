/*
 * @Description: Something
 * @Version: 1.0
 * @Autor: yu
 * @Date: 2020-04-01 13:13:32
 * @LastEditors: yu
 * @LastEditTime: 2020-04-01 16:59:37
 */
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
// TODO:测试TODO

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: 'cats',
    //   method: RequestMethod.GET,
    // });
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'xc', method: RequestMethod.GET },
        { path: 'xc', method: RequestMethod.POST },
      )
      .forRoutes(CatsController);
  }
}
