
## Description

NestJS Project Template
This is a template for a NestJS project, designed to help you get started quickly with building robust and scalable applications using NestJS, a powerful Node.js framework.

## Features
<ul>
<li><b>TypeORM Integration</b>: Easily connect to a MySQL database using TypeORM, a popular Object-Relational Mapping (ORM) library for TypeScript and JavaScript.</li>

<li><b>Data Access Objects (DAOs)</b>: Implement DAOs to abstract and encapsulate database operations. This provides a clear separation of concerns between data access and business logic.</li>

<li><b>Services</b>: Define services to encapsulate and manage the business logic of your application. Services can be injected into controllers and other components.</li>

<li><b>Filters</b>: Implement filters to handle exceptions and customize the error responses returned by the API.</li>

<li><b>Response Containers</b>: Use response containers to standardize API responses and provide consistent data structures for success and error responses.</li>

<li><b>Entities</b>: Define TypeORM entities to model your database tables and relationships. Entities represent the structure of your data.</li>

<li><b>Controllers</b>: Create controllers to handle HTTP requests and route them to the appropriate service methods. Controllers define the API endpoints.</li>

<li><b>Dotenv Configuration</b>: Manage configuration settings using dotenv, a module for loading environment variables from a .env file.</li>


## Usage
This template provides a solid foundation for building NestJS applications. You can extend it by adding your own controllers, services, and entities to suit your project's requirements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Special thanks to the NestJS community for their contributions and support.
<p><a href="https://intwaysoftware.com">Intway Software</a></p>

## Installation

```bash
$ npm install
```
Set up your MySQL database and update the connection details in .env files
## Running the app

```bash
 "start": "set NODE_ENV=dev && nest start",
 "start:test": "set NODE_ENV=test && nest start --watch",
 "start:debug": "nest start --debug --watch",
 "start:prod": "set NODE_ENV=prod && node dist/main",

 # development
$ npm run start

# watch mode
$ npm run start:test

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
