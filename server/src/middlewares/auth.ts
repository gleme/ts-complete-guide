import { Request, Response, NextFunction } from 'express';

export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session!.loggedIn) {
    next();
    return;
  } else {
    res.status(403).send('You have no access to see this route.');
  }
}