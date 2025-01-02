import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Link } from '@prisma/client';

@Injectable()
export class LinkService {
  constructor(private readonly prismaService: PrismaService) {}

  async getLinkWithCategories(userId: number): Promise<Link[]> {
    const links = await this.prismaService.link.findMany({
      where: { userId },
      include: {
        linkCategories: {
          include: {
            category: true,
          },
        },
      },
    });

    return links.map((link) => ({
      ...link,
      categories: link.linkCategories.map((lc) => lc.category),
    }));
  }
}
