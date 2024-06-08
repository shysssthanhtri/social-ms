import { UserDomainEntity } from 'entities';
import { Entity } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserEntity extends UserDomainEntity {}
