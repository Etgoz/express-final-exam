import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import bmi, { BmiInput } from './bmi';
import validator from './validator';

const app = express();

// TODO implement me :)
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(urlencodedParser);
app.use(bodyParser.json());
app.use('/bmi', validator);

app.get('/bmi', (req: Request, res: Response) => {
	res.send(bmi(req.params as unknown as BmiInput));
});

app.post('/bmi', (req: Request, res: Response) => {
	res.send(bmi(req.body as unknown as BmiInput));
});

export default app;
