/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRestaurantDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    cuisineType: string;

    @IsNumber()
    @IsNotEmpty()
    seatingCapacity: number;

    @IsString()
    @IsOptional()
    website?: string;

    @IsString()
    @IsOptional()
    description?: string;
}
