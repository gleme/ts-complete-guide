import * as express from 'express';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`
  <h1>Ola Mundo</h1>
  `)  
});

app.listen(port, () => {
  console.log(`listening at port: ${port}`)
});