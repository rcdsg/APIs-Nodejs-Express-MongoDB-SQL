//methoods: index, show, update, store, destroy
/*
index: listar sessoes
store: criar nova sessao
show: listar unica sessao
update: alterar alguma sessao
destroy: encerrar uma sessao
*/
import User from "../models/User";

class SessionController{
    async store(req,res){
        const { name } = req.body;
        const { email } = req.body;        
        
        // verificando se existe
        let user = await User.findOne({email});

        if(!user){
            user = await User.create({ name, email });
        }
        //let user = await User.create({ email, name }) //await espera cadastrar depois segue p/ o return 

        return res.json(user);
    }
}

export default new SessionController();