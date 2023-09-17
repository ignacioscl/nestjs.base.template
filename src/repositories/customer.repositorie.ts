import { Injectable } from '@nestjs/common';
import { AnonymousCustomer } from 'src/entities/anonymous.customer.entity';
import { DataSource, Repository } from 'typeorm';
@Injectable()
export class AnonymousCustomerRepository extends Repository<AnonymousCustomer> {
  constructor(private dataSource: DataSource) {
    super(AnonymousCustomer, dataSource.createEntityManager());
  }

  async getById(id: number) {
    const obj = await this.dataSource.createQueryBuilder(AnonymousCustomer,"ac")
      .leftJoinAndSelect('ac.usuario', 'u')
      .where('ac.id = :id', { id })
      .getOne();
    return obj;
  }
  async getByUuid(uuid: string) {
    const obj = await this.dataSource.createQueryBuilder(AnonymousCustomer,"ac")
      .leftJoinAndSelect('ac.usuario', 'u')
      .where('ac.uuid = :uuid', { uuid })
      .getOne();
    return obj;
  }
  async fetch() : Promise<AnonymousCustomer[]> {
    const list :AnonymousCustomer[] = await this.dataSource.createQueryBuilder(AnonymousCustomer,"au").where("au.id=:id",{id:1}).getMany();
    return list
  }
  // ...
}