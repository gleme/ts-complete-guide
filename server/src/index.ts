import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router as loginRouter } from './routes/login-route';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['adeadeadea']}));
app.use(loginRouter);

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});