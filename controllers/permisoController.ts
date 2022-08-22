
import { Request,Response } from 'express';
import { addPermisoService } from './../services/permisoService';


export const addPermisoController = ( req:Request, res:Response)=> {

    const permiso = addPermisoService(req);

    return res.status(200).json({
        msg : 'post AddPermisoController'
    })

}