import * as express from 'express';
import * as bodyParser from 'body-parser';

import { PDFMakerController } from './controllers/pdf-maker';

const app: express.Application = express();
const port: number|string = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/topdf', PDFMakerController);

app.listen(port);