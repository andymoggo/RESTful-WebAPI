// lib/routes/myRoutes.ts

import { Application, Request, Response, response} from 'express';
import { CompanyController } from '../controllers/companyController'
import { ICompany } from 'models/ICompany';

export class Routes {

    public companyController: CompanyController = new CompanyController();

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
            this.companyController.getAllCompanies(req, res);
        })
        //for saving new company
        .post((req: Request, res: Response) => {           
            this.companyController.saveNewCompany(req, res);
        });

        
        app.route('/company/:idCmp')
        //for getting a company by ID
        .get((req: Request, res: Response) => {                                    
            this.companyController.getCompanyByID(req, res);
        })   
        //for updating a company
        .put((req: Request, res: Response) => {
            this.companyController.updateCompany(req, res);
        })
        //for deleting a company
        .delete((req: Request, res: Response) => {
            this.companyController.deleteCompany(req, res);
        });
    };
}