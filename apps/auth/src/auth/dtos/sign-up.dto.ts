import { PickType } from '@nestjs/mapped-types';
import { UserDomainEntity } from 'entities';

export class SignUpDto extends PickType(UserDomainEntity, [
  'email',
  'password',
]) {}
