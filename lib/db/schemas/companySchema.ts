import mongoose from 'mongoose';
import { ICompany } from '../../models/ICompany';  //Using interface for leveraging TypeScript type-checking with Mongoose

const companySchema = new mongoose.Schema<ICompany>({
        nameComp: {
            type: String,
            required: true,
            index: true, // Indexing this field for faster query performance
        },
        emailComp: {
            type: String,
            validate: {
            validator: function(email: string) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: props => `${props.value} is not a valid email address!`
            },
            index: true, 
        },
        phoneComp: {
            type: String
        },
        operationCountriesComp: {
            type: [String],
        },
    },{
        timestamps: true 
});



export const CompanySchema = mongoose.model<ICompany>('Company', companySchema);
