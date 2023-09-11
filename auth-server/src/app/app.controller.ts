import { Controller, Get, Post, Request, UseGuards, Session } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';


@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  // Using LocalAuthGuard for JWT-based authentication
  @UseGuards(LocalAuthGuard)
  @Post('login-jwt')
  async loginJWT(@Request() req): Promise<any> {
    return this.authService.loginJWT(req.user);
  }

  // Using LocalAuthGuard for Session-based authentication
  @UseGuards(LocalAuthGuard)
  @Post('login-session')
  loginSession(@Request() req, @Session() session): any {
    session.user = req.user;
    return this.authService.loginSession(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected-jwt')
  protectedJWT(@Request() req): any {
    return req.user;
  }

  // No guard here as session-based authentication would have been done by now
  @Get('protected-session')
  protectedSession(@Request() req, @Session() session): any {
    return session.user || 'No user in session';
  }
}
