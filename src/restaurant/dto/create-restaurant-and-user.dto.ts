/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, IsOptional, IsEmail } from 'class-validator';

export class CreateRestaurantAndUserDto {
    // 🏢 Restaurant details
    @IsString()
    @IsNotEmpty()
    restaurantName: string;

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

    // 👤 User (owner) details
    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password: string;

    @IsString()
    @IsOptional()
    role?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    addressLine?: string;

    @IsString()
    @IsOptional()
    profilePicture?: string;
}
