const { User } = require('../models/index')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController{

  static register(req, res, next){
    const {email, password, name, role} = req.body
    let newUser = {
      email,
      password,
      name,
      role
    }

    User.create(newUser)
      .then( user => {
        res.status(201).json({
          id: user.id,
          email: user.email,
          name: user.name
        })
      })
      .catch( err => {
        err.from = 'userController - register'
        next(err)
      })
  }

  static login(req,res,next){
    const { email, password } = req.body
    User.findOne({
      where:{
        email: email
      }
    })
    .then( user => {
      if(!user) throw { name: 'customError', message: 'Invalid email or password', status: 400 }
      const comparedPass = comparePassword(password,user.password)
      if(!comparedPass) throw { name: 'customError', message: 'Invalid email or password', status: 400 }
      const access_token = generateToken({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      })
      res.status(200).json({ access_token, name: user.name, role: user.role, id: user.id })
    })
    .catch( err => {
      err.from = 'userController - login'
      next(err)
    })
  }
}

module.exports = UserController