// lib/routes/myRoutes.ts

import { Application, Request, Response} from 'express';

export class Routes {

    public routes(app: Application): void {
        app.route('/')
        .get((req: Request, res: Response) => {
            console.log("Get Request received");
            res.status(200).send({
                message: 'GET REQUEST RECEIVED'
            });
        });
    };

}