/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsEmail } from 'class-validator';

export class CreateRestaurantAndUserDto {
    // Restaurant details
    @IsString()
    @IsNotEmpty()
    restaurantName: string;

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

    // User details
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsOptional()
    role?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    profilePicture?: string;
}
