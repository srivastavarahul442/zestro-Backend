/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuItemController } from './menu-item.controller';
import { MenuItemService } from './menu-item.service';
import { MenuItem, MenuItemSchema } from '../menu-item/schema/menu-item.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: MenuItem.name, schema: MenuItemSchema }]),
    ],
    controllers: [MenuItemController],
    providers: [MenuItemService],
})
export class MenuItemModule {}
