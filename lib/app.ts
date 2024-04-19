// lib.app.ts

import express = require('express');
import bodyParser = require('body-parser');

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config() : void {
        //Enable support for POST data of type json.
        this.app.use(bodyParser);
        //Enable support for POST data of type x-www-urlencoded.
        this.app.use(bodyParser.urlencoded({ extended : false}));
    }
}

export default new App().app;