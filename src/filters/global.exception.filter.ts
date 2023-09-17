import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';

@Catch(Error)
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const contexto = host.switchToHttp();
    const response = contexto.getResponse<Response>();

    const mensaje = exception.message;
    const stacktrace = exception.stack; // Obtén el stacktrace aquí

    response.status(500).json({ data:null, error:{message: mensaje,code:500,stack:stacktrace} });
  }
}
