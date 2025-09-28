/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { MenuItemModule } from './menu-item/menu-item.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI ||
        // If MONGODB_URI is undefined, throw an error
        (() => {
          throw new Error('MONGODB_URI environment variable is not set!');
        })(),
    ),
    UserModule,
    MenuItemModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
