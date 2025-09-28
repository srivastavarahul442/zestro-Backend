/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
// import { MenuItem } from '../../menu-item/schema/menu-item.schema';

// Enum for order status
export enum OrderStatus {
    Pending = 'Pending',
    InProgress = 'In Progress',
    Completed = 'Completed',
    Delivered = 'Delivered',
}

// Enum for payment status
export enum PaymentStatus {
    Paid = 'Paid',
    Unpaid = 'Unpaid',
    Pending = 'Pending',
}

@Schema({ timestamps: true })
export class Order extends Document {
    @Prop({ type: Types.ObjectId, ref: 'User', required: true })
    userId: string; // Reference to the customer who placed the order

    @Prop({ required: false })
    tableNumber?: number; // Optional for dine-in orders

    @Prop([
        {
            menuItemId: { type: Types.ObjectId, ref: 'MenuItem', required: true },
            quantity: { type: Number, required: true },
        },
    ])
    orderItems: { menuItemId: Types.ObjectId; quantity: number }[];

    @Prop({ required: true })
    totalPrice: number;

    @Prop({ enum: OrderStatus, default: OrderStatus.Pending })
    status: OrderStatus;

    @Prop({ enum: PaymentStatus, default: PaymentStatus.Pending })
    paymentStatus: PaymentStatus;

    @Prop({ required: false })
    paymentMethod?: string; // e.g., Cash, Card, Online

    @Prop({ required: false })
    deliveryTime?: Date; // For delivery orders

    @Prop({ required: false })
    specialRequests?: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
