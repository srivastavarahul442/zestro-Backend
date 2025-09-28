/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { Category } from '../schema/menu-item.schema';

export class UpdateMenuItemDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    price?: number;

    @IsEnum(Category)
    @IsOptional()
    category?: Category;

    @IsString()
    @IsOptional()
    image?: string;

    @IsOptional()
    isAvailable?: boolean;
}
