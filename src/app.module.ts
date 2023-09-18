import { Module , NestModule, MiddlewareConsumer} from '@nestjs/common';
import { AppPublicController } from './controllers/app.public.controller';
import { AppService } from './services/app.service';
import { DbConnectionModule } from './db-connection/db-connection.module';
import { AnonymousCustomerService } from './services/anonymous.customer.service';
import { CustomerController } from './controllers/customer.controller';
import { AnonymousCustomerRepository } from './repositories/anonymous.customer.repositorie';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './interceptors/response.iterceptor';
import { BussinessExceptionFilter } from './filters/bussiness.exception.filter';
import { GlobalExceptionFilter } from './filters/global.exception.filter';
import { AuthMiddleware } from './middlewares/auth.middleware';
import { JwtService } from './services/jwt.service';
import { CustomerRepository } from './repositories/customer.repositorie';
import { CustomerService } from './services/customer.service';

@Module({
  imports: [DbConnectionModule],
  controllers: [AppPublicController,CustomerController],
  providers: [AppService,
    AnonymousCustomerService,
    CustomerService,
    JwtService,
    AnonymousCustomerRepository,
    CustomerRepository,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },{
      provide: APP_FILTER,
      useClass: BussinessExceptionFilter,
    },{
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        'api-public',
      ).forRoutes("api/*");
  }
}
