/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Restaurant extends Document {
    // Auto-generated restaurant ID like REST1234
    @Prop({ unique: true, default: () => `REST${Math.floor(1000 + Math.random() * 9000)}` })
    restaurantId: string;

    @Prop({ required: true })
    name: string;

    // GST Number (unique per restaurant)
    @Prop({ required: true, unique: true })
    gstNumber: string;

    // Optional website
    @Prop()
    website: string;

    // Restaurant logo (URL or file path)
    @Prop()
    restaurantLogo: string;

    // Optional description
    @Prop()
    description: string;

    // 🏠 Address Details
    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    state: string;

    @Prop({ required: true })
    postalCode: string;

    @Prop({ required: true })
    country: string;
}

export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
