const {User} = require ('../models')

const authController ={
async register(req, res){
    const {name, email, message} = req.body;
    try{
        const user = await User.create({
            name,
            email,
            message,
            create_at: new Date().toISOString(),
          });

        return res.redirect ('/home')

    }catch(err){
        console.log(err)
        return res.redirect('/home')
    }
}
}
module.exports = authController