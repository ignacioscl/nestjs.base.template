//usuario.entity.ts
// src/usuario/usuario.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity('anonymous_customer')
export class AnonymousCustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column({name:'date_created',insert:false,update:false})
  dateCreated: string;

  @OneToOne(() => Customer, { nullable:true}) // La relación OneToOne con Usuario
  @JoinColumn([{ name: 'id', referencedColumnName: 'id' }])
  usuario: Customer;
}
