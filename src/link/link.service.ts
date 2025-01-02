import { Injectable } from '@nestjs/common';
import { Link } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LinkService {
  constructor(private readonly prismaService: PrismaService) {}

  async getLinks(userId: number): Promise<Link[]> {
    return await this.prismaService.link.findMany({
      where: {
        userId,
      },
    });
  }
}
