// auth/auth.strategy.mapper.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { IAuthStrategy } from './strategies/auth.strategy.interface';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Injectable()
export class AuthStrategyMapper {
  constructor(
    private readonly jwtStrategy: JwtStrategy,
    private readonly localStrategy: LocalStrategy,
  ) {}

  getStrategy(strategyName: string): IAuthStrategy {
    if (strategyName === 'jwt') {
      return this.jwtStrategy;
    }
    if (strategyName === 'local') {
      return this.localStrategy;
    }
    throw new NotFoundException(`Strategy ${strategyName} not found.`);
  }
}
