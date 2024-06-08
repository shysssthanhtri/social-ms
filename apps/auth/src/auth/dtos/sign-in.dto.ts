import { PickType } from '@nestjs/swagger';
import { UserDomainEntity } from 'entities';

export class SignInDto extends PickType(UserDomainEntity, [
  'email',
  'password',
]) {}
