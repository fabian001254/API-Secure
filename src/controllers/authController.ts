import {Response,Request} from "express"
import jwt from "jsonwebtoken"

import Controller from "./controller"

class authController extends Controller{

    /**
     * Autentica a un usuario y devuelve un token si la autenticación es correcta.
     * @param req Objeto de solicitud de Express.
     * @param res Objeto de respuesta de Express.
     * @returns Token JWT si la autenticación es correcta.
     */
    async autennticacion(req:Request,res:Response){
        const tarjeta = parseInt(req.params.tarjeta)

        try {
            // Busca al usuario con la tarjeta profesional especificada
            const user = await this.prismaClient.medico.findFirst({
                where: { tarjetaProfesional: { equals: tarjeta} }
            })

            if(!user){
                // Si el usuario no existe, devuelve un error 400
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
                    // Si la clave secreta es una cadena, genera un token JWT y lo devuelve
                    const token =jwt.sign(payload,secretKey,options)
                    return res.status(201).json({ message: "Creado con exito", token})   
                }   
            }

        } catch (error) {
            // Si ocurre un error durante la autenticación, devuelve un error 400
            res.status(400).json({ message: "Tarjeta profesional no existe!!!" })
            console.log(error)
        } 
    }
}

export default authController
