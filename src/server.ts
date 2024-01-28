import express, { Request, Response } from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';

const app = express();

const PORT = 3055;
// Morgan with console interface
app.use(morgan('dev'));
// Helmet to install security headers
app.use(helmet());
// Compression to compress data
app.use(compression());

app.get("/", (req: Request, res: Response) => {
    res.send("API is running");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})