/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsOptional()  // Make name optional for update
    name?: string;

    @IsEmail()
    @IsOptional()  // Make email optional for update
    email?: string;

    @IsString()
    @MinLength(6)
    @IsOptional()  // Make password optional for update
    password?: string;

    @IsString()
    @IsOptional()  // Make role optional for update
    role?: string;

    @IsString()
    @IsOptional()  // Make phone optional for update
    phone?: string;

    @IsString()
    @IsOptional()  // Make address optional for update
    address?: string;

    @IsString()
    @IsOptional()  // Make profilePicture optional for update
    profilePicture?: string;
}
