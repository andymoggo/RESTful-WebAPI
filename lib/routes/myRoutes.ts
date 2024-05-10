// lib/routes/myRoutes.ts

import { Application, Request, Response} from 'express';

export class Routes {

    public routes(app: Application): void {

        
        app.route('/')
        //for getting a request pointing to '/'
        .get((req: Request, res: Response) => {
            //console.log("Get Request received");
            res.status(200).send({
                message: 'GET REQUEST RECEIVED'
            });
        });

        app.route('/company')
        //for getting all companies
        .get((req: Request, res: Response) => {
            //console.log("Getting companies");
            res.status(200).send({
                message: 'All Companies - received'
            });
        })
        //for saving new company
        .post((req: Request, res: Response) => {
            //console.log("Saving new company");
            res.status(200).send({
                message: `New Company saved - ok`
            })
        });

        
        app.route('/company/:idCmp')
        //for getting a company by ID
        .get((req: Request, res: Response) => {            
            let idCmp = req.params.idCmp;
            //console.log(`Getting company by ID:${idCmp}`);
            res.status(200).send({
                message: `Company by ID ${idCmp} - received`
            });
        })   
        //for updating a company
        .put((req: Request, res: Response) => {
            let idCmp = req.params.idCmp;
            //console.log(`Updating new company by ID:${idCmp}`);
            res.status(200).send({
                message: `Company Updated - ok`
            });
        })
        //for deleting a company
        .delete((req: Request, res: Response) => {
            let idCmp = req.params.idCmp;
            //console.log(`Deleting a company by ID:${idCmp}`);
            res.status(200).send({
                message: `Company Deleted - ok`
            });
        });
    };
}