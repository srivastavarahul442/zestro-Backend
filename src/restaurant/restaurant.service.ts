/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../restaurant/schema/restaurant.schema'
import { CreateRestaurantDto } from './dto/restaurant.dto';

@Injectable()
export class RestaurantService {
    constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>) {}

    async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
        const restaurant = new this.restaurantModel(createRestaurantDto);
        return restaurant.save();
    }

    async findAll(): Promise<Restaurant[]> {
        return this.restaurantModel.find().exec();
    }

    async findById(id: string): Promise<Restaurant | null> {
        return this.restaurantModel.findById(id).exec();
    }

    async update(id: string, updateRestaurantDto: Partial<CreateRestaurantDto>): Promise<Restaurant | null> {
        return this.restaurantModel.findByIdAndUpdate(id, { $set: updateRestaurantDto }, { new: true }).exec();
    }

    async delete(id: string): Promise<Restaurant | null> {
        return this.restaurantModel.findByIdAndDelete(id).exec();
    }
}
