import { PickType } from '@nestjs/swagger';
import { UserDomainEntity } from 'entities';

export class SignUpDto extends PickType(UserDomainEntity, [
  'email',
  'password',
]) {}
