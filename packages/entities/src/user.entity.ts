import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail()
  @Column({
    unique: true,
  })
  email: string;

  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(30)
  @Column({
    name: 'display_name',
    length: 30,
  })
  displayName: string;

  @IsNotEmpty()
  @Column()
  password: string;
}
