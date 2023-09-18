import { Injectable } from '@nestjs/common';

import { Customer } from 'src/entities/customer.entity';
import CustomerFilter from 'src/queryFilter/customer.filter';
import { DataSource, Repository } from 'typeorm';
@Injectable()
export class CustomerRepository extends Repository<Customer> {
  constructor(private dataSource: DataSource) {
    super(Customer, dataSource.createEntityManager());
  }

  async getById(id: number) : Promise<Customer> {
    const obj = await this.findOne({ where:{ id: id }});
    return (obj ? obj.toJSON() : null);
  }

  async fetch(filter:CustomerFilter) : Promise<[Customer[],number]> {
    const query = this.dataSource.createQueryBuilder(Customer,"c")
    
    if (filter.id>0) {
      query.where("c.id=:id",{id:filter.id})
    }
    if (filter.orderBy) {
      query.orderBy(filter.orderBy,filter.orderByDirection)
    }
    const [list,total]  = await query.getManyAndCount();
    const ret           = list.map((e : Customer) => e.toJSON())
    return [ret,total];
  }
  // ...
}