import User from '../models/user';
import { Request, Response } from 'express';
import * as jwt from '../configJWT/jwt';


class authController{

    public async criarUser(req:Request, res:Response){
        try {
            const result = await User.create(req.body);
            const {senha, ...user} = result.toObject();          
            const token = jwt.sing({user: user.id});
            
            return res.json({user, token});
        } catch (error) {
            return res.json({mensagem: 'não foi possivel criar um novo usuario'});
        }
       
    }

    public async login(req:Request, res:Response){
        const { email, senha } = req.body;
        try {
            const user = await User.findOne({ email, senha });
            if(!user){
                return res.status(200).json({mensagem: 'usuario não encontrado'});
            }else{
                return res.json(user);
            }
        } catch (error) {
           return res.json({mensagem: 'erro ao efetuar o login'});
        }
    }

}

export default new authController;