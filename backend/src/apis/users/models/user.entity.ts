/*
220816 수정
 */
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
@ObjectType()
export class User extends Model<User> {
  @Column({
    type: DataType.CHAR(36),
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  @Field(() => String)
  id: string;

  @Column
  @Field(() => String)
  name: string;

  @Column
  @Field(() => String)
  phone: string;

  @Column
  @Field(() => String)
  email: string;

  @Column
  password: string;

  @CreatedAt
  @Field(() => Date)
  creationDate: Date;

  @UpdatedAt
  @Field(() => Date)
  updatedOn: Date;

  @DeletedAt
  @Field(() => Date)
  deletionDate: Date;
}
