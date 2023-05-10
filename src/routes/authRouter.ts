import authController from "../controllers/authController"
import {Request,Response } from "express"
import routerClass from "./routerClass"
class authRouter extends routerClass {

    AuthController: authController
    constructor(){
        // Llama al constructor de la clase padre
        super()
        this.AuthController = new authController()
        // Define las rutas para los endpoints GET y POST
        this.routes()
    }

    private routes():void{
        this.router.get("/auth/:tarjeta",
        (req:Request, res:Response) =>{
            this.AuthController.autennticacion(req, res)
        })
    }


}
export default new authRouter().router