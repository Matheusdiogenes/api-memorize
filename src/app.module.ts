import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [UsersModule, CardsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
