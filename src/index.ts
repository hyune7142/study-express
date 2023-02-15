import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import router from './testRouter';

const app = express();
// const server = http.createServer(app);
app.listen(8080);
// server.listen(8080);

const middleware = (req: Request, res: Response, next: NextFunction) => {
    const { query, params, body } = req;
    console.log('2', { query, params, body });
    next();
}


// Middleware (:handler 전처리)
app.use(express.json()); // Request Body JSON 파싱
app.use(express.urlencoded({ extended: false })); // Request Body Form Data 파싱
app.use((req, res, next) => {
    const { query, params, body } = req;
    console.log('1', { query, params, body });
    next();
});
app.use('/api', middleware, router)