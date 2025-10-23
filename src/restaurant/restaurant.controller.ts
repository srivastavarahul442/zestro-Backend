/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Patch, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/restaurant.dto';
import { Restaurant } from '../restaurant/schema/restaurant.schema';
import { CreateRestaurantAndUserDto } from './dto/create-restaurant-and-user.dto';

@Controller('restaurants')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) {}

    // @Post()
    // async createRestaurant(@Body() createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    //     return this.restaurantService.create(createRestaurantDto);
    // }

    @Post()
    async createWithOwner(@Body() createRestaurantAndUserDto: CreateRestaurantAndUserDto): Promise<any> {
        return this.restaurantService.createRestaurantAndUser(createRestaurantAndUserDto);
   }

    @Get()
    async findAllRestaurants(): Promise<Restaurant[]> {
        return this.restaurantService.findAll();
    }

    @Get(':id')
    async findRestaurantById(@Param('id') id: string): Promise<Restaurant | null> {
        return this.restaurantService.findById(id);
    }

    @Patch(':id')
    async updateRestaurant(@Param('id') id: string, @Body() updateRestaurantDto: Partial<CreateRestaurantDto>): Promise<Restaurant> {
        const updated = await this.restaurantService.update(id, updateRestaurantDto);
        if (!updated) throw new NotFoundException(`Restaurant with id ${id} not found`);
        return updated;
    }

    @Delete(':id')
    async deleteRestaurant(@Param('id') id: string): Promise<Restaurant> {
        const deleted = await this.restaurantService.delete(id);
        if (!deleted) throw new NotFoundException(`Restaurant with id ${id} not found`);
        return deleted;
    }
}
