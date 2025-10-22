/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Restaurant extends Document {
    @Prop({ unique: true, default: () => `REST${Math.floor(1000 + Math.random() * 9000)}` })
    restaurantId: string;  // Auto-generated ID like REST1234

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    cuisineType: string;

    @Prop({ required: true })
    seatingCapacity: number;

    @Prop()
    website: string;

    @Prop()
    description: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
