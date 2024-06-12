import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '@/abstract.entity';

@Entity({
  name: 'users',
})
export class UserDomainEntity extends AbstractEntity {
  @IsEmail()
  @Column({
    unique: true,
  })
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(30)
  @Column({
    name: 'display_name',
    length: 30,
  })
  @ApiProperty()
  displayName: string;

  @IsNotEmpty()
  @Column()
  @ApiProperty()
  @Exclude({ toPlainOnly: true })
  password: string;
}
