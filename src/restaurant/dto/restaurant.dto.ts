/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRestaurantDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    gstNumber: string;

    @IsString()
    @IsOptional()
    website?: string;

    @IsString()
    @IsOptional()
    restaurantLogo?: string;

    @IsString()
    @IsOptional()
    description?: string;

    // 🏠 Address Details
    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    postalCode: string;

    @IsString()
    @IsNotEmpty()
    country: string;
}
