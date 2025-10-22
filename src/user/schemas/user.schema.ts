/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum Role {
    Admin = 'admin',
    Manager = 'manager',
    Waiter = 'waiter',
    Customer = 'customer',
    Owner = 'owner',
}
// todo - add owner role

@Schema({ timestamps: true })
export class User extends Document {
    @Prop()
    name: string;

    @Prop({ unique: true })
    email: string;

    @Prop()
    password: string;

    @Prop({ enum: Role, default: Role.Customer })
    role: Role;

    @Prop({ type: Types.ObjectId, ref: 'Restaurant', required: true })
restroId: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop()
    profilePicture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
