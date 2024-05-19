// lib.app.ts

import express = require('express');
import bodyParser = require('body-parser');
import { Routes } from './routes/myRoutes'; //importing Routes
import mongoose from 'mongoose';

class App {

    public app: express.Application; //
    public routerMyApp : Routes = new Routes; //creating a new Routes instance 

    constructor() {
        this.app = express();
        this.config();
        this.routerMyApp.routes(this.app); //using instance method to route the app
    }

    private config() : void {
        
        this.app.use(express.json()); //Enable support for POST data of type json.        
        this.app.use(express.urlencoded({ extended : true})); //Enable support for POST data of type x-www-urlencoded.
        this.setupDb();
    }

    private setupDb() : void {
        let mongourl = 'mongodb://localhost:27017/CompaniesTrack';
        mongoose.Promise = global.Promise;
        mongoose.connect(mongourl);
    }

    
}

export default new App().app;