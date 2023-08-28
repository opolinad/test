
import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import { connection } from "./db/models";

dotenv.config();
const app: Application = express();

app.use(morgan('dev'));

connection.authenticate().then((): void => {
    const port = process.env.SERVER_PORT;
    app.listen(port, (): void =>
        console.log(`Express is listening at http://localhost:${port}`));
});
