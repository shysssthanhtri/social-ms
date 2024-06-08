import { Body, Controller, Post } from '@nestjs/common';

import { SignInDto } from '@/auth/dtos/sign-in.dto';

@Controller('auth')
export class AuthController {
  @Post('signup')
  async signUp(@Body() dto: SignInDto) {
    return dto;
  }
}
