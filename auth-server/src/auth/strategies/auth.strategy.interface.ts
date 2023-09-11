// auth/strategies/auth.strategy.interface.ts
export interface IAuthStrategy {
    validate(username: string, password: string): Promise<any>;
  }
  