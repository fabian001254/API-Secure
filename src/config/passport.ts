import { Strategy, ExtractJwt } from "passport-jwt"

const opts={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY    
}

const strategy:Strategy = new Strategy(
    opts, (payload,done)=>{
        const usuarios={
            id:payload.tarjeta
        }
        if(usuarios){
            return done(null,usuarios)
        }else{
            return done(null,false)
        }
    }
)
export default strategy