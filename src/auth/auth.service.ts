import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  // Hardcoded credentials for simplicity
  private readonly users = [
    {
      username: 'admin',
      password: 'password',
    },
  ];

  async validateUser(username: string, password: string): Promise<any> {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      return user;
    }
    return null;
  }

  async generateToken(user: any): Promise<string> {
    const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, { expiresIn: '1h' });
    return token;
  }
}