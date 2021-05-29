const { Kyc, User } = require('../models/index')

class KycController{

  static addKyc(req, res, next){
    const { id, name } = req.user
    let nowDate = new Date()
    let uniqueNumber = nowDate.getTime()
    let ktpFile;
    let uploadtKtpPath;
    let selfie;
    let uploadSelfiePath

    if (!req.files || Object.keys(req.files).length === 0) {
      throw {
        name : 'customError',
        message : 'Bad Request',
        status : 400
      }
    }

    ktpFile = req.files.ktpFile;
    ktpFile.name = uniqueNumber + name + 'ktp.jpeg'
    uploadtKtpPath = process.env.KTPPATH + ktpFile.name

    selfie = req.files.selfie;
    selfie.name = uniqueNumber + name + 'selfie.jpeg'
    uploadSelfiePath = process.env.SELFIE + selfie.name

    ktpFile.mv(uploadtKtpPath)
    .then( responseKtp => {
      return selfie.mv(uploadSelfiePath)
    })
    .then( responseSelfie => {
      return Kyc.create({ Userid: id, ktp:ktpFile.name, selfieUser: selfie.name, statusApproval: 'submit'})
    })
    .then( dataKyc => {
      res.status(201).json(dataKyc)
    })
    .catch( err => {
      err.from = 'userController - addKyc'
      next(err)
    })
  }

  static getAll(req, res, next){
    Kyc.findAll({
      where:{
        statusApproval: 'submit'
      },
      include:[{
        model: User
      }]
    })
    .then( dataKyc => {
      res.status(200).json(dataKyc)
    })
    .catch( err => {
      err.from = 'userController - getAll'
      next(err)
    })
  }

  static updateApproval(req, res, next){
    const { id } = req.params
    const { status } = req.body

    Kyc.update({ statusApproval: status },{
      where:{
        id
      }
    })
    .then( dataKyc => {
      if(!dataKyc){
        throw {
          name : 'customError',
          message : 'Error Not Found',
          status : 404
        }
      } else {
        res.status(200).json({ message: "Successfully update status approval"})
      }
    })
    .catch( err => {
      err.from = 'userController - updateApproval'
      next(err)
    })
  }

  static getDataById(req, res, next){
    const { id } = req.params

    Kyc.findAll({
      where:{
        Userid: id
      }
    })
    .then ( dataKyc => {
      if(!dataKyc.length){
        res.status(200).json({ message: "Data Not Found"})
      } else {
        res.status(200).json(dataKyc)
      }
    })
    .catch( err=> {
      err.from = 'userController - getDataById'
      next(err)
    })
  }

  static getDetailKyc(req, res, next){
    const { id } = req.params

    Kyc.findByPk(id)
    .then( dataKyc => {
      if(!dataKyc){
        throw {
          name : 'customError',
          message : 'Error Not Found',
          status : 404
        }
      } else {
        res.status(200).json(dataKyc)
      }
    })
    .catch( err=> {
      err.from = 'userController - getDetailKyc'
      next(err)
    })
  }
}

module.exports = KycController