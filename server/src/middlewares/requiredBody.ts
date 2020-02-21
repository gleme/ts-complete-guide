import { Response, Request, RequestHandler, NextFunction } from "express";

export function bodyValidators(keys: string): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send('Invalidi request');
        return;
      }
    }

    next();
  }
}