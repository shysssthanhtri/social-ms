import { Injectable, UnauthorizedException } from '@nestjs/common';

import { SignUpDto } from '@/auth/dtos/sign-up.dto';
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

  signUp = async (dto: SignUpDto) => {
    return this.usersService.create(dto);
  };
}
