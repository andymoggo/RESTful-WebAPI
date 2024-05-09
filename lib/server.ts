// lib.server.ts

import app from "./app";
//import { Company } from "models/companyModel";
const PORT = 3010;

app.listen(PORT, () => {
    console.log("Im listening on port " + PORT);

//    Company.create({
//        nameComp: "Company Testu",
//    });

})