import {Response,Request} from "express"
import jwt from "jsonwebtoken"

import Controller from "./controller"

class authController extends Controller{

    async autennticacion(req:Request,res:Response){
            const tarjeta = parseInt(req.params.tarjeta)

            try {
                const user = await this.prismaClient.medico.findFirst({
                    where: { tarjetaProfesional: { equals: tarjeta} }
                })
                
                if(!user){
                    res.status(400).json({ message: "tarjeta profesional no existe" })
                }else{
                    const payload = {
                        id:user
                    }
                    
                    
                    const options={
                        expiresIn : "1h"
                    }
        
                    const secretKey = process.env.SECRET_KEY
        
                    if(typeof secretKey == "string"){
                        const token =jwt.sign(payload,secretKey,options)
                        return res.status(201).json({ message: "Creado con exito", token})   
                    }   
                }

                
            } catch (error) {
                res.status(400).json({ message: "Tarjeta profesional no existe!!!" })
                console.log(error)
            }
            

        }
    }


export default authController