import {
  Column,
  Table,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript'
import { User } from 'src/users/models/user.model'
import { Role } from './role.model'

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
  })
  userId: string

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  roleId: string
}
