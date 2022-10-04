import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common'
import { RolesService } from './roles.service'
import { CreateRoleDto } from './dto/create-role.dto'

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto)
  }

  @Get()
  find(@Query() query) {
    if (query.id) return this.rolesService.findOneById(+query.id)
    if (query.value) return this.rolesService.findOneByValue(query.value)
    return this.rolesService.findAll()
  }

  @Delete()
  remove(@Query() query) {
    if (query.id) return this.rolesService.removeById(+query.id)
    if (query.value) return this.rolesService.removeByValue(query.value)
  }
}
