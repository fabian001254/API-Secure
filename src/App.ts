import SwaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./swagger.conf"
import express,{ Application, NextFunction, Request, Response } from "express"
import {Prisma, PrismaClient} from "@prisma/client"
import PacienteRouter from "./routes/PacienteRouter"
import MedicoRouter from "./routes/MedicoRoutes"
import especialidadRoutes from "./routes/especialidadRouter"
import citaRouter from "./routes/citaRouter"
import formularioRouter from "./routes/formularioRouter"
import dotenv from "dotenv"
dotenv.config()
import strategy from "./config/passport"
import passport from "passport"
import cors from "cors"
import authRouter from "./routes/authRouter"
import especialidadRouter from "./routes/especialidadRouter"
/**
 * Clase principal de la api
 *  @author Fabian Trujillo
 *  @description Clase de la api
 */
	class App{
	private prismaClient:PrismaClient
	public app:Application
	private server:any
    
	/**
     * Metodo constructor
     */
	constructor(){
		this.app = express()
		this.app.use(express.json())
		this.app.use(
			"/api-docs",
			SwaggerUi.serve,
			SwaggerUi.setup(swaggerSpec)
		)
		this.app.use(cors())
		this.routes()
		this.prismaClient = new PrismaClient()
	}

	/*
		Definir rutas de express
	*/
	private routes():void{
		this.app.use("/",authRouter)
		// Configura passport para usar la estrategia de autenticación especificada en la variable 'strategy'
		passport.use(strategy)
		// Configura la aplicación para usar el middleware de autenticación de passport. Este middleware inicializa el objeto de autenticación de passport en cada solicitud.
		this.app.use(passport.initialize())
		this.app.use("/",passport.authenticate("jwt",{session:false}),citaRouter)
		this.app.use("/",passport.authenticate("jwt",{session:false}),PacienteRouter)
		this.app.use("/",passport.authenticate("jwt",{session:false}),MedicoRouter)
		this.app.use("/",passport.authenticate("jwt",{session:false}),especialidadRouter)
		this.app.use("/", formularioRouter)
		this.app.use(
			(req:Request,res:Response,next:NextFunction)=>{
				res.status(404).json({message: "Recurso no encontrado"})
				next()
			})
		
	}
	/*
		Metodo que inicia el servidor en el puerto 3000
	*/
	public start():void{
		this.server = this.app.listen(3000,
			()=>{console.log("Servidor iniciado 3000")})
	}
	/*
		Metodo que apaga el servidor 
	*/
	public close():void{
		if (this.server) {
            this.server.close()
        }
	}
}
export default App