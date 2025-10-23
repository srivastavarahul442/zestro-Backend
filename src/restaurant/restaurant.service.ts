/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurant } from '../restaurant/schema/restaurant.schema'
import { CreateRestaurantDto } from './dto/restaurant.dto';
import { CreateRestaurantAndUserDto } from './dto/create-restaurant-and-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class RestaurantService {
    constructor(@InjectModel(Restaurant.name) private restaurantModel: Model<Restaurant>,
private readonly userService: UserService
) {}

    // async create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    //     const restaurant = new this.restaurantModel(createRestaurantDto);
    //     return restaurant.save();
    // }

    // Create restaurant and user (owner)
  async createRestaurantAndUser(createRestaurantAndUserDto: CreateRestaurantAndUserDto): Promise<any> {
    // 1️⃣ Create the restaurant
    const restaurant = new this.restaurantModel({
      name: createRestaurantAndUserDto.restaurantName,
      cuisineType: createRestaurantAndUserDto.cuisineType,
      seatingCapacity: createRestaurantAndUserDto.seatingCapacity,
      website: createRestaurantAndUserDto.website,
      description: createRestaurantAndUserDto.description,
    });

    const savedRestaurant = await restaurant.save();  // Save restaurant

    // 2️⃣ Now create the user (owner) with the restaurant ID
    const userPayload = {
      name: createRestaurantAndUserDto.userName,
      email: createRestaurantAndUserDto.email,
      password: createRestaurantAndUserDto.password,
      role: createRestaurantAndUserDto.role || 'owner', // Default to 'owner'
      restroId: savedRestaurant._id,  // Assign restaurant ID to user
      phone: createRestaurantAndUserDto.phone,
      address: createRestaurantAndUserDto.address,
      profilePicture: createRestaurantAndUserDto.profilePicture,
    };

    const savedUser = await this.userService.create(userPayload);  // Create user and return

    // Return both restaurant and user details
    return {
      message: 'Restaurant and Owner created successfully',
      restaurant: savedRestaurant,
      user: savedUser,
    };
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
