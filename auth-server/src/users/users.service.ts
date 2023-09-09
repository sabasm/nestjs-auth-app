import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    username: 'john',
    password: 'changeme',
  },
  {
    id: 2,
    name: 'Jane Doe',
    username: 'jane',
    password: 'changethis',
  },
];

@Injectable()
export class UsersService {
    private readonly users: User[] = mockUsers;

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async findById(id: number): Promise<User | undefined> {
        return this.users.find(user => user.id === id);
    }

    async findByUsername(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

}
