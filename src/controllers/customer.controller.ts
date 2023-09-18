import { Controller, Get,Post, Param, ParseIntPipe,Req,Body } from '@nestjs/common';
import { Request } from 'express';
import IllegalAccessException from 'src/exceptions/illegal.access.exception';
import { UpdateFields } from 'src/types/update.fields.type';
import { CustomerService } from 'src/services/customer.service';
import { Customer } from 'src/entities/customer.entity';
import CustomerFilter from 'src/queryFilter/customer.filter';
import ResponsePaginator from 'src/types/response.paginator.type';
@Controller('api/customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number, @Req() req: Request): Promise<Customer | undefined> {
    const userLogued =(req as any).user;
    if ((userLogued.id === id && userLogued.uuid) || (userLogued.isAdmin === 1)) {
      return await this.customerService.getById(id);
    } else {
      throw new IllegalAccessException("Access restriction")
    }
    
  }

  @Post() // Define la ruta para el método POST
  async saveUpdate(@Body() anonymousUser: Customer & UpdateFields, @Req() req: Request): Promise<Customer> {
    const userLogued =(req as any).user;
    if ((userLogued.id === anonymousUser.id && userLogued.uuid) || (userLogued.isAdmin === 1)) {
      return await this.customerService.saveUpdate(anonymousUser);
    } else {
      throw new IllegalAccessException("Access restriction")
    }
  }
  
  @Post("fetch") // Define la ruta para el método POST
  async fetch(@Body() filter: CustomerFilter, @Req() req: Request): Promise<ResponsePaginator<Customer[]>> {
    const userLogued =(req as any).user;
    
    return await this.customerService.fetch(filter);
  }
  // Puedes agregar más rutas y métodos aquí para manejar otros casos de uso relacionados con AnonymousCustomer.
}
