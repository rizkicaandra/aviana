const { verify } = require('../helpers/jwt')

const authenticate = (req, res, next) => {
    try{
      const token = req.headers.access_token
      const decoded = verify(token, process.env.SECRET )
      req.user = decoded
      next()
    } catch(err){
      res.status(401).json({
        message : 'Invalid Token',
      })
    }
} 

module.exports = authenticate
