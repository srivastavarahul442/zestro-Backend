/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from '../order/schema/order.schema';
import { CreateOrderDto } from '../order/dto/order.dto';

@Injectable()
export class OrderService {
    constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const order = new this.orderModel(createOrderDto);
        return order.save();
    }

    async findAll(): Promise<Order[]> {
        return this.orderModel.find().populate('userId').populate('orderItems.menuItemId').exec();
    }

    async findById(id: string): Promise<Order | null> {
        return this.orderModel.findById(id).populate('userId').populate('orderItems.menuItemId').exec();
    }

    async update(id: string, updateOrderDto: Partial<CreateOrderDto>): Promise<Order | null> {
        return this.orderModel.findByIdAndUpdate(id, { $set: updateOrderDto }, { new: true }).exec();
    }

    async delete(id: string): Promise<Order | null> {
        return this.orderModel.findByIdAndDelete(id).exec();
    }
}
