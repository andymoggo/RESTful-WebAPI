import * as mongoose from 'mongoose';

//Creating interface for leveraging TypeScript type-checking with Mongoose
interface ICompany {
    idComp: mongoose.Schema.Types.ObjectId, //this is managed by mongoose internally
    nameComp: string;
    emailComp: string;
    phoneComp: string;
    operationCountriesComp: string[]; 
}

const CompanySchema = new mongoose.Schema<ICompany>({
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
            index: true, // Indexing the email for faster query performance and uniqueness
        },
        phoneComp: {
            type: String
        },
        operationCountriesComp: {
            type: [String],
        },
    },{
        timestamps: true // Adding createdAt and UpdatedAt timestamps by default
});

export const Company = mongoose.model<ICompany>('company', CompanySchema);