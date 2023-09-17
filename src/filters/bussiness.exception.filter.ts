import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import BussinessException from 'src/exceptions/bussiness.exception';

@Catch(Error)
export class BussinessExceptionFilter implements ExceptionFilter {
  catch(exception: BussinessException, host: ArgumentsHost) {
    const contexto = host.switchToHttp();
    const response = contexto.getResponse<Response>();

    const mensaje     = exception.message;
    const stacktrace  = exception.stack; // Obtén el stacktrace aquí
    const code        = exception.code;
    response.status(500).json({ data:null, error:{message: mensaje,code:code,stack:stacktrace} });
  }
}
