import { Response, Request } from 'express';
import { controller, use, get } from "./decorators";
import { requireAuth } from '../middlewares/auth';

@controller('')
class RootController {
  
  @get('/')
  getRoot(req: Request, res: Response): void {
    let html;
    if (req.session!.loggedIn) {
      html = `
        <div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `;
    } else {
      html = `
        <div>
          <div>You are not logged in</div>
          <a href="/auth/login">Logout</a>
        </div>
      `;
    }
    res.send(html);
  };

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send('Welcome to protected route, logged in user');
  };


}