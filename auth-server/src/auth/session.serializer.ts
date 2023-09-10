import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/users.service';
import { UsersService } from '../users/users.service';

type DoneFunction = (err: Error | null, payload?: any) => void;

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  /**
   * Serialize user instance into session
   * @param {User} user - The user instance
   * @param {DoneFunction} done - The done function
   * @returns {void}
   */
  serializeUser(user: User, done: DoneFunction): void {
    if (!user || !user.id) {
      return done(new Error('Invalid user instance'), null);
    }
    // Only store the user's ID in the session
    done(null, user.id);
  }

  /**
   * Deserialize user by its ID
   * @param {number} id - The user ID stored in session
   * @param {DoneFunction} done - The done function
   * @returns {Promise<void>}
   */
  async deserializeUser(id: number, done: DoneFunction): Promise<void> {
    if (!id) {
      return done(new Error('Invalid user ID'), null);
    }

    // Fetch the user by its ID from the UsersService
    const user = await this.usersService.findById(id);

    if (!user) {
      return done(new Error('User not found'), null);
    }

    done(null, user);
  }
}
