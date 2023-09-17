import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AnonymousCustomer } from 'src/entities/anonymous.customer.entity';
import { AnonymousCustomerRepository } from 'src/repositories/customer.repositorie';

@Controller('api/customers')
export class CustomerController {
  constructor(private readonly anonymousCustomerRepository: AnonymousCustomerRepository) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<AnonymousCustomer | undefined> {
    return await this.anonymousCustomerRepository.getById(id);
  }

  // Puedes agregar más rutas y métodos aquí para manejar otros casos de uso relacionados con AnonymousCustomer.
}
