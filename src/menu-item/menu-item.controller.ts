/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { MenuItemService } from './menu-item.service';
import { CreateMenuItemDto } from './dto/menu-item.dto';
import { MenuItem } from '../menu-item/schema/menu-item.schema';
import { UpdateMenuItemDto } from '../menu-item/dto/update-menu-item.dto';

@Controller('menu-items')
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService) {}

  @Post()
  async createMenuItem(
    @Body() createMenuItemDto: CreateMenuItemDto,
  ): Promise<MenuItem> {
    return this.menuItemService.create(createMenuItemDto);
  }

  @Get()
  async findAllMenuItems(): Promise<MenuItem[]> {
    return this.menuItemService.findAll();
  }

  @Get(':id')
  async findMenuItemById(@Param('id') id: string): Promise<MenuItem | null> {
    return this.menuItemService.findById(id);
  }

  @Patch(':id')
  async updateMenuItem(
    @Param('id') id: string,
    @Body() updateMenuItemDto: UpdateMenuItemDto,
  ): Promise<MenuItem | null> {
    return this.menuItemService.update(id, updateMenuItemDto);
  }

  @Delete(':id')
  async deleteMenuItem(@Param('id') id: string): Promise<MenuItem | null> {
    return this.menuItemService.delete(id);
  }
}
