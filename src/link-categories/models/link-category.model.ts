import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '../../category/models/category';

@ObjectType()
export class LinkCategory {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  linkId: number;

  @Field(() => Int)
  categoryId: number;

  @Field(() => Category)
  category: Category;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
