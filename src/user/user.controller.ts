/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':email')
  async findUserByEmail(@Param('email') email: string): Promise<User | null> {
    return this.userService.findByEmail(email);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    const updatedUser = await this.userService.update(id, updateUserDto);
    if (!updatedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    const deletedUser = await this.userService.delete(id);
    if (!deletedUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return deletedUser;
  }
}
