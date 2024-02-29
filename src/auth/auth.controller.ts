import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body, @Res() res) {
    const { username, password } = body;
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = await this.authService.generateToken(user);
    return res.json({ token });
  }
}