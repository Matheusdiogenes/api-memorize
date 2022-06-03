import { Injectable } from '@nestjs/common';
import * as moment from 'moment';
import { PrismaService } from 'src/prisma.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardsService {
  constructor(private prisma: PrismaService) { }

  async create(createCardDto: CreateCardDto) {
    return await this.prisma.cards.create({
      data: createCardDto
    });
  }

  async findAll() {
    return await this.prisma.cards.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.cards.findUnique({
      where: {
        id: Number(id)
      }
    });
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    const nextLevel = await this.prisma.cards.findUnique({
      where: {
        id: Number(id)
      }
    })

    const cardAge = nextLevel.nextReview.getFullYear() - nextLevel.createdAt.getFullYear()
    if(cardAge > 200) return {message: "Card not exists."}
    
    const nextDay = moment().add(nextLevel.level * 2 - 1, 'days').format()

    if (updateCardDto.response) {
      return await this.prisma.cards.update({
        where: {
          id: Number(id)
        },
        data: {
          level: nextLevel.level * 2,
          nextReview: nextDay,
          response: true
        }
      });
    }
    return await this.prisma.cards.update({
      where: {
        id: Number(id)
      },
      data: {
        level: 1,
        nextReview: moment().format(),
        response: false
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.cards.delete({
      where: {
        id: Number(id)
      }
    });
  }
}
