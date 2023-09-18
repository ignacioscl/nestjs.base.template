import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { AnonymousCustomerService } from 'src/services/anonymous.customer.service';

@Controller("/api-public")
export class AppPublicController {
  constructor(private readonly anonymousCustomerService: AnonymousCustomerService) {}

  @Get("/getTokenByUuid/:uuid")
  async getTokenByUuid(@Param('uuid') uuid:string): Promise<string> {
    return await this.anonymousCustomerService.getTokenByUuid(uuid);
  }
}
