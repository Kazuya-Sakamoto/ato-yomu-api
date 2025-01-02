import { Resolver } from '@nestjs/graphql';
import { Args, Int, Query } from '@nestjs/graphql';
import { LinkService } from './link.service';
import { Link } from '@prisma/client';
import { Link as LinkModel } from './models/link.model';

@Resolver()
export class LinkResolver {
  constructor(private readonly linkService: LinkService) {}

  @Query(() => [LinkModel], { nullable: 'items' })
  // @UseGuards(JwtAuthGuard)
  async getLinks(
    @Args('userId', { type: () => Int }) userId: number,
  ): Promise<Link[]> {
    return await this.linkService.getLinks(userId);
  }
}
