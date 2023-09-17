import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { AnonymousCustomerService } from 'src/services/customer.service';

@Controller("/api-public")
export class AppPublicController {
  constructor(private readonly anonymousCustomerService: AnonymousCustomerService) {}

  @Get("/getTokenByUuid/:uuid")
  getTokenByUuid(@Param('uuid') uuid:string): string {
    return this.anonymousCustomerService.getTokenByUuid(uuid);
  }
}
