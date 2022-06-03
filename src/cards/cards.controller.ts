import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  async create(@Body() createCardDto: CreateCardDto) {
    return await this.cardsService.create(createCardDto);
  }

  @Get()
  async findAll() {
    return await this.cardsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.cardsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCardDto: UpdateCardDto) {
    return await this.cardsService.update(+id, updateCardDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cardsService.remove(+id);
  }
}
