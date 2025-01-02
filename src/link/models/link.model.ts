import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '../../category/models/category';

@ObjectType()
export class Link {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  title?: string;

  @Field(() => Int, { description: '1: PENDING, 2: DELETED' })
  status: number;

  @Field()
  url: string;

  @Field({ nullable: true })
  iconUrl?: string;

  @Field({ nullable: true })
  ogImageUrl?: string;

  @Field({ nullable: true })
  siteName?: string;

  @Field({ nullable: true })
  domainUrl?: string;

  @Field(() => [Category], { nullable: true })
  categories?: Category[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
