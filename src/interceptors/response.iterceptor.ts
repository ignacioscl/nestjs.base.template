import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class ResponseInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      // Intercepta la respuesta antes de que se envíe al cliente
      return next.handle().pipe(
        map((data) => {
          // Modifica la respuesta aquí, por ejemplo, agrega un campo personalizado
          return { data, error:{message: null,code:null,stack:null} };
        }),
      );
    }
  }
  