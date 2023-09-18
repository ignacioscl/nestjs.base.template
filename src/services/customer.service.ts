import { AnonymousCustomer } from "src/entities/anonymous.customer.entity";
import { Injectable } from '@nestjs/common';
import { AnonymousCustomerRepository } from "src/repositories/anonymous.customer.repositorie";
import { JwtService } from "./jwt.service";
import { UpdateFields } from "src/types/update.fields.type";
import BussinessException from "src/exceptions/bussiness.exception";
import { isForUpdate } from "src/utils/GeneralUtils";
import { Customer } from "src/entities/customer.entity";
import { CustomerRepository } from "src/repositories/customer.repositorie";
import CustomerFilter from "src/queryFilter/customer.filter";
import ResponsePaginator from "src/types/response.paginator.type";

@Injectable()
export class CustomerService {

    constructor(
      private readonly customerRepository: CustomerRepository,
      private readonly jwtService: JwtService, // Inyecta el JwtService
      ) {}
  
    async getById(id: number): Promise<Customer> {
      return this.customerRepository.getById(id);
    }


    async saveUpdate(obj:Customer & UpdateFields) : Promise<Customer> {
      if (!obj.id || obj.id<1) {
        throw new BussinessException("Error in id",BussinessException.ATRIBUTE_VALUE_ERR);
      }
      if (!obj.updateFields) {
        throw new BussinessException("Error in attr updatefields",BussinessException.ATRIBUTE_VALUE_ERR);
      }
      let objDb = await this.getById(obj.id);
      if (!objDb) {
        objDb = obj;
      }

      if (isForUpdate(obj.updateFields,"name")) {
        objDb.name = obj.name;
      }
      console.log("db",objDb)
      return await this.customerRepository.save(objDb);
    }
   
    async fetch (filter : CustomerFilter) : Promise<ResponsePaginator<Customer[]>> {
      if (!filter) {
        filter = {isActive:1}
      }
      if (filter.isActive === undefined || filter.isActive === null) {
        filter.isActive = 1;
      }
      const [list,tot]  = await this.customerRepository.fetch(filter);
      const result : ResponsePaginator<Customer[]> = {} as any;
      result.actualPage         = filter.currentPage as any;
      result.data               = list;
      result.totalRecords       = tot;
      return result;
    }
    // ... Puedes agregar más métodos de servicio aquí
  }