import { CompanySchema } from '../db/schemas/companySchema';
import { ICompany } from 'models/ICompany';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

// Helper function to send standardized responses
const sendResponse = (res : Response, sendCode: number, message: string, data: any) => {
    return res.status(sendCode).send({
        status: sendCode,
        message: message,
        data: data
    });
}

export class CompanyController {

    async getAllCompanies(req: Request, res: Response) {
        try {
            let allCompanies : ICompany[] = await CompanySchema.find();
            sendResponse(res, 200, 'Companies found successfully', allCompanies)
        } catch (error) {
            console.error("Error fetching all companies");
            sendResponse(res, 500, 'Internal Server Error retrieving companies', null)
        }
    }

    async saveNewCompany(req: Request, res: Response) {
        let companyData = req.body;
        //console.log(companyData);
        try{            
            let newCompany = await CompanySchema.insertMany([companyData]);
            sendResponse(res, 200, 'Company created successfully', newCompany);
        } catch(error){
            //console.error("Error saving new company", error);
            sendResponse(res, 500, 'Internal Server Error saving company', null)
        }
    }

    async updateCompany(req: Request, res: Response) {
        let idCmp = req.params.idCmp;
        let updatedData = req.body;
        //console.log(`updated data ${updatedData} and idCmp ${idCmp}`)
        try {
            let updatedCompany = await CompanySchema.findByIdAndUpdate(idCmp, updatedData);
            if (!updatedCompany) {
                sendResponse(res, 404, 'Company not updated', null);
            } else {
                sendResponse(res, 200, 'Company updated successfully', updatedData);
            }
        } catch (error) {
            //console.error("Error geting company by id ", error);
            sendResponse(res, 500, 'Internal Server Error updating company by id', null)
        }

    }

    async getCompanyByID(req: Request, res: Response) {
        let idCmp = req.params.idCmp;
        //console.log(`Received ID: ${idCmp}`);
        try {
            let company = await CompanySchema.findById(idCmp);
            if (!company) {
                sendResponse(res, 404, 'Company not found', null);
            } else {
                sendResponse(res, 200, 'Company found successfully', company);
            }
            
        } catch (error) {
            //console.error("Error geting company by id ", error);
            sendResponse(res, 500, 'Internal Server Error getting company by id', null)
        }
    }

    async deleteCompany(req: Request, res: Response) {
        let idCmp = req.params.idCmp;
        try {
            let companyDeleted = await CompanySchema.findByIdAndDelete(idCmp);
            if (!companyDeleted) {
                sendResponse(res, 404, 'Company not found', null);
            } else {
                sendResponse(res, 200, 'Company deleted successfully', companyDeleted);
            }
            
        } catch (error) {
            //console.error("Error geting company by id ", error);
            sendResponse(res, 500, 'Internal Server Error deleting company by id', null)
        }
    }



     

}