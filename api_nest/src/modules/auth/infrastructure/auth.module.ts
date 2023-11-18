import { Module } from '@nestjs/common';
import { AuthService } from '../application/auth.service';
import { AuthController } from '../presentation/auth.controller';
import { UserModule } from 'src/modules/user/infracstructure/user.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UserModule],
})
export class AuthModule {}
