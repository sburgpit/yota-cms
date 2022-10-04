import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { SequelizeModule } from '@nestjs/sequelize'
import { ProductsModule } from './products/products.module'
import { User } from './users/models/user.model'
import { UsersModule } from './users/users.module'
import { RolesModule } from './roles/roles.module'
import { Role } from './roles/models/role.model'
import { UserRoles } from './roles/models/user-roles.model'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: +process.env.PG_PORT,
      username: process.env.PG_USER,
      password: process.env.PG_PASS,
      database: process.env.PG_DB,
      models: [User, Role, UserRoles],
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductsModule,
    UsersModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
