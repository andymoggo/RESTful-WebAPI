// lib.app.ts

import express = require('express');
import bodyParser = require('body-parser');
import { Routes } from './routes/myRoutes'; //importing Routes

class App {

    public app: express.Application; //
    public routerMyApp : Routes = new Routes; //creating a new Routes instance 

    constructor() {
        this.app = express();
        this.config();
        this.routerMyApp.routes(this.app); //using instance method to route the app
    }

    private config() : void {
        //Enable support for POST data of type json.
        this.app.use(express.json());
        //Enable support for POST data of type x-www-urlencoded.
        this.app.use(express.urlencoded({ extended : true}));
    }
}

export default new App().app;