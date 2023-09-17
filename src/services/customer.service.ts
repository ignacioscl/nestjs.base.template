import { AnonymousCustomer } from "src/entities/anonymous.customer.entity";
import { Injectable } from '@nestjs/common';
import { AnonymousCustomerRepository } from "src/repositories/customer.repositorie";
import { JwtService } from "./jwt.service";

@Injectable()
export class AnonymousCustomerService {

    constructor(
      private readonly customerRepository: AnonymousCustomerRepository,
      private readonly jwtService: JwtService, // Inyecta el JwtService
      ) {}
  
    async getById(id: number): Promise<AnonymousCustomer> {
      return this.customerRepository.getById(id);
    }

    getTokenByUuid(uuid: string): string {
       // Aquí puedes utilizar el JwtService para generar un token
      const payload = { uuid }; // Define el payload del token
      const token = this.jwtService.generateToken(payload);

      return token;
    }
    // ... Puedes agregar más métodos de servicio aquí
  }