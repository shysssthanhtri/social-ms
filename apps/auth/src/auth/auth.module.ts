import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from '@/auth//auth.service';
import { AuthController } from '@/auth/auth.controller';
import { LocalStrategy } from '@/auth/local.strategy';
import { UsersModule } from '@/users/users.module';

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
