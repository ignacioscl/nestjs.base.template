// src/usuario/usuario.entity.ts
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { CustomBaseEntity } from './CustomBaseEntity';
import { AnonymousCustomer } from './anonymous.customer.entity';

@Entity("customer")
export class Customer extends CustomBaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({name:'is_active'})
  isActive: number;

  @OneToOne(() => AnonymousCustomer, anonymous => anonymous.usuario)
  anonymous: AnonymousCustomer;
}
