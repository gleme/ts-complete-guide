import { controller, get } from './decorators';
import { Request, Response } from 'express';

@controller('/auth')
export class LoginController {

  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email" type="email" />
    </div>
    <div>
      <label>Password</label>
      <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>
  `);
  }
  
}