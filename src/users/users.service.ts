import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Role } from 'src/roles/models/role.model'
import { RolesService } from 'src/roles/roles.service'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './models/user.model'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private usersRepository: typeof User,
    private rolesService: RolesService,
  ) {}

  async findAll() {
    return await this.usersRepository.findAll({ include: [Role] })
  }

  async create(сreateUserDto: CreateUserDto) {
    const user = await this.usersRepository.create(сreateUserDto)
    const role = await this.rolesService.findOneByValue('user')
    await user.$set('roles', [role.id])
    return user
  }
}
