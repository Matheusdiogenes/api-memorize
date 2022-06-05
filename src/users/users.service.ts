import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.prisma.user.create({
        data: createUserDto
      });
      return user
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') throw new ForbiddenException('Credentials taken')
      }
      throw error
    }
  }

  async findAll() {
    const user = await this.prisma.user.findMany();
    return user
  }

  async findOne(id: number) {
    const user = await this.checkUserExist(id)
    if (!user) return { msg: "User not found" }
    return user
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.checkUserExist(id)
    if (!user) return { msg: "User not found" }

    await this.prisma.user.update({
      where: {
        id: Number(id)
      },
      data: updateUserDto
    });
    return { msg: 'User updated' }
  }

  async remove(id: number) {
    const user = await this.checkUserExist(id)
    if (!user) return { msg: "User not found" }
    
    await this.prisma.user.delete({
      where: {
        id: Number(id)
      }
    });

    return {msg: 'User deleted'}
  }

  async checkUserExist(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    });
    return user
  }
}
