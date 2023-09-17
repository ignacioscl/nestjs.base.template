// src/db-connection/db-connection.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Cambia esto al tipo de tu base de datos (en este caso, MySQL)
      host: config.dbHost, // Cambia esto a la dirección de tu servidor MySQL
      port: 3306, // Cambia esto al puerto de tu servidor MySQL
      username: config.dbUser, // Cambia esto a tu nombre de usuario de MySQL
      password: config.dbPassword, // Cambia esto a tu contraseña de MySQL
      database: config.dbName, // Cambia esto al nombre de tu base de datos MySQL
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Ruta a tus entidades
      logging: true, // Habilitar el registro de consultas
    }),
  ],
})
export class DbConnectionModule {}
