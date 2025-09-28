/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuItem } from '../menu-item/schema/menu-item.schema';
import { CreateMenuItemDto } from './dto/menu-item.dto';
import { UpdateMenuItemDto } from '../menu-item/dto/update-menu-item.dto';

@Injectable()
export class MenuItemService {
    constructor(@InjectModel(MenuItem.name) private menuItemModel: Model<MenuItem>) {}

    // Create a new menu item
    async create(createMenuItemDto: CreateMenuItemDto): Promise<MenuItem> {
        const createdMenuItem = new this.menuItemModel(createMenuItemDto);
        return createdMenuItem.save();
    }

    // Find all menu items
    async findAll(): Promise<MenuItem[]> {
        return this.menuItemModel.find().exec();
    }

    // Find a menu item by ID
    async findById(id: string): Promise<MenuItem | null> {
        return this.menuItemModel.findById(id).exec();
    }

     // Update menu item by ID (partial update)
    async update(id: string, updateMenuItemDto: UpdateMenuItemDto): Promise<MenuItem | null> {
        return this.menuItemModel.findByIdAndUpdate(
            id,
            { $set: updateMenuItemDto },
            { new: true }
        ).exec();
    }

    // Delete menu item by ID
    async delete(id: string): Promise<MenuItem | null> {
        return this.menuItemModel.findByIdAndDelete(id).exec();
    }
}
