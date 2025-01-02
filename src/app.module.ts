import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { LinkModule } from './link/link.module';
import { LinkCategoriesModule } from './link-categories/link-categories.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // cors: {
      //   origin: '*',
      // },
    }),
    PrismaModule,
    LinkModule,
    LinkCategoriesModule,
    CategoryModule,
  ],
})
export class AppModule {}
