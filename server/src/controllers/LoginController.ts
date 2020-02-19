import { controller, get, post, bodyValidator } from './decorators';
import { Request, Response } from 'express';

@controller('/auth')
class LoginController {

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

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;
  
    if (email === 'gleme@nevada.unr.edu' && password === 'root') {
      req.session = { loggedIn: true };
      res.redirect('/');
  
    } else {
      res.status(401).send('Invalid email or password');
    }
  }

  @get('/logout')
  logout(req: Request, res: Response): void {
    req.session = undefined;
    res.redirect('/');
  }
  
}