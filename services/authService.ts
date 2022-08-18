import { Request, Response } from "express";
import  bcryptjs from "bcryptjs"
import User from './../models/mariadb/user';
import Auth from "../utils/auth/Auth";

export const loginUserService = async(req:Request, res:Response)=>{

        const {email , password }  =  req.body
        

        try {
        //Verificamos si existe el email
  
        const usuario  = await User.findOne({where: {  email: email}}) ;
        if( !usuario  ) {
                
               return {
                    msg : 'Usuario/Passwrod no son correctos - correo',
                    usuario
                };
        }

       //validmos el password
       const validPassword = Auth.compare(password,usuario.password,(error: string | null, match: boolean | null) => {
               
                if(error){
                        return {
                                msg : 'Usuario/Passwrod no son correctos - correo',
                                usuario
                        };
                }else{
                        //generamos token
                }
        
       })
        } catch (error) {
                
        }

        


       
}