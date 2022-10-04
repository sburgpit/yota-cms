import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateRoleDto } from './dto/create-role.dto'
import { Role } from './models/role.model'

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private rolesRepository: typeof Role) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.rolesRepository.create(createRoleDto)
  }

  async findAll() {
    return await this.rolesRepository.findAll()
  }

  async findOneById(id: number) {
    return await this.rolesRepository.findByPk(id)
  }

  async findOneByValue(value: string) {
    return await this.rolesRepository.findOne({ where: { value } })
  }

  async removeById(id: number) {
    return await this.rolesRepository.destroy({ where: { id } })
  }

  async removeByValue(value: string) {
    return await this.rolesRepository.destroy({ where: { value } })
  }
}
