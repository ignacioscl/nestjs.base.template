//usuario.entity.ts
// src/usuario/usuario.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { CustomBaseEntity } from './CustomBaseEntity';

@Entity('anonymous_customer')
export class AnonymousCustomer extends CustomBaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column({name:'date_created',insert:false,update:false})
  dateCreated: string;

  /*
  @OneToOne(() => UserAdditional, userAdditional => userAdditional.user, {
        nullable: true,
        cascade: true, // Esto permite que las operaciones de guardado y eliminación se propaguen a la entidad relacionada
      })
    @JoinColumn([{ name: 'id', referencedColumnName: 'id' }])
    */
  @OneToOne(() => Customer, customer => customer.anonymous, { 
    nullable:true,
    cascade:true}
  ) // La relación OneToOne con Usuario
  @JoinColumn([{ name: 'id', referencedColumnName: 'id' }])
  usuario: Customer;
}
