import { Request } from "express";

export const getUsuariosService = ()=> {
    return ;
}

export const getUsuarioService = (req : Request)=> {
    const {id} = req.params;
    return { id }
   // const {id} = req.params;
  
}

export const postUsuarioService = ()=> {
    
    // const {body} = req;
    
}
export const putUsuarioService = ()=> {
    return ;

    // const  {id} = req.params
    // const {body} = req;
}  

