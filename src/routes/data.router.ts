import {Router, Request, Response, NextFunction} from 'express';

const debug = require('debug')('distro:DataRouter');

export class DataRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public init() {
        this.router.get('/', this.getAll);
        this.router.post('/', this.postData);
    }

    public getAll(req: Request, res: Response, next: NextFunction): void {
        res.send('Data Router Get All')
    }

    public postData(req: Request, res: Response, next: NextFunction): void {
        debug('post: %o', req.body);
    }
}

const dataRouter = new DataRouter();

export default dataRouter;