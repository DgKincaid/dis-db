import * as express from 'express';
import * as bodyParser from 'body-parser';

import DataRouter from './routes/data.router';

class App {
    public express: express.Application;

    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
    }

    private routes(): void {
        let router = express.Router();

        router.get('/', (req, res, next) => {
            res.json({message: 'Hello world'});
        });

        this.express.use('/', router);
        this.express.use('/api/data', DataRouter.router);
    }
}

export default new App().express;