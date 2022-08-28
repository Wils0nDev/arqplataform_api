import express, {Application} from "express";
import  usuarioRoutes from "../v1/routes/usuarioRoutes";
import  authRoutes from "../v1/routes/authRoutes";
import permissionRoutes from "../v1/routes/permissionRoutes";
import planRoutes from "../v1/routes/planRoutes";
import detailplanpermission from "../v1/routes/detailPlanPermissionRoutes"

import { apiPaths } from '../api_path/apiPath';
import { Cors } from "../middlewares/cors";
import DataBaseMongo from "./dbMongo";
import  mariaDB  from "./dbMariaDb";

class Server {
    
    private app: Application;
    private port: string;
    private apiPaths = apiPaths
    constructor() {
        this.app = express();
        this.port = process.env.PORT_SERVER || '8000';
        //metodos iniciales
       this.middlewares();
        this.routes();
        this.dbConnection();
    }  

    async dbConnection(){
        try {
              await mariaDB.authenticate();
             // console.log('conectado mariadb')
              const mongodb = new DataBaseMongo()
              await mongodb.connect();
              

        } catch (error) {
            throw new Error( 'error en conexión' );
            
        }
    }

    middlewares(){

        //CORS
       this.app.use(Cors);
        //lectura del body
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.apiPaths.auth, authRoutes)
        this.app.use(this.apiPaths.usuarios, usuarioRoutes)
        this.app.use(this.apiPaths.plan,planRoutes )
        this.app.use(this.apiPaths.permisos,permissionRoutes )
        this.app.use(this.apiPaths.detailplanpermission, detailplanpermission)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto ' + this.port)
        })
    }
}

export default Server;