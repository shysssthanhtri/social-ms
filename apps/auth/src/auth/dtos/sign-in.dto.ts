import { PickType } from '@nestjs/mapped-types';
import { UserDomainEntity } from 'entities';

export class SignInDto extends PickType(UserDomainEntity, [
  'email',
  'password',
]) {}
