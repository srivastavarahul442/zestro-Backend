/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsEnum, IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { Category } from '../schema/menu-item.schema';

export class CreateMenuItemDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsEnum(Category)
    @IsNotEmpty()
    category: Category;

    @IsString()
    @IsOptional()  // Image is optional
    image?: string;

    @IsOptional()  // Availability is optional, defaulting to true
    isAvailable?: boolean;
}
