/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Patch, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';
import { Order } from '../order/schema/order.schema';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.create(createOrderDto);
    }

    @Get()
    async findAllOrders(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get(':id')
    async findOrderById(@Param('id') id: string): Promise<Order | null> {
        return this.orderService.findById(id);
    }

    @Patch(':id')
    async updateOrder(@Param('id') id: string, @Body() updateOrderDto: Partial<CreateOrderDto>): Promise<Order> {
        const updatedOrder = await this.orderService.update(id, updateOrderDto);
        if (!updatedOrder) throw new NotFoundException(`Order with id ${id} not found`);
        return updatedOrder;
    }

    @Delete(':id')
    async deleteOrder(@Param('id') id: string): Promise<Order> {
        const deletedOrder = await this.orderService.delete(id);
        if (!deletedOrder) throw new NotFoundException(`Order with id ${id} not found`);
        return deletedOrder;
    }
}
