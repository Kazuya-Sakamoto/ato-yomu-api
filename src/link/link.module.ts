import { Module } from '@nestjs/common';
import { LinkResolver } from './link.resolver';
import { LinkService } from './link.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LinkResolver, LinkService],
})
export class LinkModule {}
