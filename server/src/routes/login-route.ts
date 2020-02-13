import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}


function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send('You have no access to see this route.');
  }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'gleme@nevada.unr.edu' && password === 'root') {
    req.session = { loggedIn: true };
    res.redirect('/');

  } else {
    res.status(401).send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  let html;
  if (req.session.loggedIn) {
    html = `
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `;
  } else {
    html = `
      <div>
        <div>You are not logged in</div>
        <a href="/login">Logout</a>
      </div>
    `;
  }
  res.send(html);
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});


export { router };
