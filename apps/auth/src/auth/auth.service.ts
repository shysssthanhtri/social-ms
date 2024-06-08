import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UsersService } from '@/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user.password !== password) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
