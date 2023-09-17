// middleware/auth.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from 'src/config/config';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Obtener la ruta de la solicitud
    const ruta = req.originalUrl;


    // Obtener el token del encabezado de autorización
    const token = req.headers.authorization;

    if (!token) {
      // Si no se proporciona un token, devolver un error de autorización
      return res.status(401).json({ message: 'Token de autorización no proporcionado' });
    }

    // Verificar el token y decodificar el objeto
    try {
      const decoded = jwt.verify(token, config.token); // Reemplaza 'tu_secreto_secreto' con tu clave secreta real

      // Adjuntar el objeto decodificado a la solicitud para que esté disponible en los controladores
      req['user'] = decoded;

      // Continuar con la solicitud
      next();
    } catch (error) {
      // Si hay un error al verificar el token, devolver un error de autorización
      return res.status(401).json({ message: 'Token de autorización no válido' });
    }
  }
}
