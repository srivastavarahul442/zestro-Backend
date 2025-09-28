/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Enum for menu item categories
export enum Category {
    Starter = 'Starter',
    MainCourse = 'Main Course',
    Dessert = 'Dessert',
    Beverage = 'Beverage',
}

@Schema({ timestamps: true })
export class MenuItem extends Document {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    price: number;

    @Prop({ enum: Category, default: Category.MainCourse })
    category: Category;

    @Prop()
    image: string;

    @Prop({ default: true })
    isAvailable: boolean; // Whether the item is currently available for ordering
}

export const MenuItemSchema = SchemaFactory.createForClass(MenuItem);
