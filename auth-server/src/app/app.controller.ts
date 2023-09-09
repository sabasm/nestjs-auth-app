import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly AppService:AppService) {}

    @Post('login')
    login():any {
        return this.AppService.login();
    }

    @Post('protected')
    protected():any {
        return this.AppService.protected();
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
}
