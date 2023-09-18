import { AnonymousCustomer } from "src/entities/anonymous.customer.entity";
import { Injectable } from '@nestjs/common';
import { AnonymousCustomerRepository } from "src/repositories/anonymous.customer.repositorie";
import { JwtService } from "./jwt.service";
import { UpdateFields } from "src/types/update.fields.type";
import BussinessException from "src/exceptions/bussiness.exception";
import { isForUpdate } from "src/utils/GeneralUtils";
import { Customer } from "src/entities/customer.entity";

@Injectable()
export class AnonymousCustomerService {

    constructor(
      private readonly anonymousCustomerRepository: AnonymousCustomerRepository,
      private readonly jwtService: JwtService, // Inyecta el JwtService
      ) {}
  
    async getById(id: number): Promise<AnonymousCustomer> {
      return this.anonymousCustomerRepository.getById(id);
    }
    async getByUuid(uuid: string): Promise<AnonymousCustomer> {
      return this.anonymousCustomerRepository.getByUuid(uuid);
    }
    async save(obj:AnonymousCustomer) : Promise<AnonymousCustomer> {
      
      return await this.anonymousCustomerRepository.save(obj);
    }
   
    async getTokenByUuid(uuid: string): Promise<string> {
      let obj = await this.getByUuid(uuid);
      if (!obj) {
        obj = await this.save({uuid} as AnonymousCustomer)
      }
       // Aquí puedes utilizar el JwtService para generar un token
      const payload = obj; // Define el payload del token
      const token = this.jwtService.generateToken(payload);

      return token;
    }
    // ... Puedes agregar más métodos de servicio aquí
  }