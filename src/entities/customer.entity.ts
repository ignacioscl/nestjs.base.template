// src/usuario/usuario.entity.ts
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity("customer")
export class Customer {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;
}
