/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  // Find user by email
  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  // Find all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Update user by ID (fix type issue)
  async update(id: string, updateUserDto: CreateUserDto): Promise<User | null> {
    // Use $set to update only the provided fields
    return this.userModel
      .findByIdAndUpdate(id, { $set: updateUserDto }, { new: true })
      .exec();
  }

  // Delete user by ID
  async delete(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec(); // Use findByIdAndDelete instead of findByIdAndRemove
  }
}
