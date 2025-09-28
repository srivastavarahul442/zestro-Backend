/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderStatus, PaymentStatus } from '../schema/order.schema';

class OrderItemDto {
    @IsNotEmpty()
    @IsString()
    menuItemId: string;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;
}

export class CreateOrderDto {
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsOptional()
    @IsNumber()
    tableNumber?: number;

    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => OrderItemDto)
    orderItems: OrderItemDto[];

    @IsNotEmpty()
    @IsNumber()
    totalPrice: number;

    @IsEnum(OrderStatus)
    @IsOptional()
    status?: OrderStatus;

    @IsEnum(PaymentStatus)
    @IsOptional()
    paymentStatus?: PaymentStatus;

    @IsOptional()
    @IsString()
    paymentMethod?: string;

    @IsOptional()
    deliveryTime?: Date;

    @IsOptional()
    @IsString()
    specialRequests?: string;
}
