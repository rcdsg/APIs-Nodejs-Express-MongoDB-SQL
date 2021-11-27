import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App{
    constructor(){
        this.server = express();
        /*
        mongoose.connect('mongodb+srv://rcdsg:RC@))*@@2oo8ZZ@aplicacaocurso.ih9bj.mongodb.net/devHouse?retryWrites=true&w=majority',{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        */
        mongoose.connect('mongodb+srv://rcdsg:MKPG7lT3cwPcZP19@aplicacaocurso.ih9bj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}
export default new App().server;