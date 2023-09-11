import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import config from 'config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { IAuthStrategy } from './auth.strategy.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) implements IAuthStrategy {
  constructor(private readonly UsersService: UsersService) {
    super({
      ignoreExpiration: false,
      secretOrKey: config.JWT_SECRET,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: any) {
    const user = await this.UsersService.findById(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    return result;
  }
}
