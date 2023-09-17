import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import config from 'src/config/config';

@Injectable()
export class JwtService {
  private readonly secretKey = config.token; // Reemplaza con tu clave secreta

  generateToken(payload: Record<string, any>): string {
    return jwt.sign(payload, this.secretKey); // Configura la expiración según tus necesidades
  }
}
