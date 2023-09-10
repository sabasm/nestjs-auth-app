import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller()
export class AppController {
    constructor(private readonly AppService:AppService) {}
    
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req):any {
        return {
            message: 'Login successful',
        };
    }

    @UseGuards(AuthenticatedGuard)
    @Get('protected')
    protected(@Request() req):any {
        return req.user;
    }
}



    // @Post('register')
    // register():any {
    //     return this.AppService.register();
    // }

    // @Post('refresh')
    // refresh():any {
    //     return this.AppService.refresh();
    // }

    // @Post('logout')
    // logout():any {
    //     return this.AppService.logout();
    // }

    // @Post('profile')
    // profile():any {
    //     return this.AppService.profile();
    // }

    // @Post('public')
    // public():any {
    //     return this.AppService.public();
    // }

    // @Post('admin')
    // admin():any {
    //     return this.AppService.admin();
    // }

    // @Post('user')
    // user():any {
    //     return this.AppService.user();
    // }

    // @Post('guest')
    // guest():any {
    //     return this.AppService.guest();
    // }

    // @Post('all')
    // all():any {
    //     return this.AppService.all();
    // }