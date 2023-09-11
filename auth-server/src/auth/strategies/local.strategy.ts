import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { IAuthStrategy } from './auth.strategy.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) implements IAuthStrategy {
  constructor(private readonly AuthService: AuthService) {
    super(); //options and configs
    // super({ usernameField: 'email', passwordField: 'password' }); // PassportStrategy constructor here we would add options and configs for the strategy
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.AuthService.validateUser(username, password);

    if (!user) {
        throw new UnauthorizedException();
    }

    return user;
  }
}
