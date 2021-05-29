import axios from 'axios'
import Swal from 'sweetalert2'

let BASEURL = 'https://kyc-rizki.herokuapp.com/'

export function setLoadingLogin(payload){
  return { type: 'LOADINGLOGIN/SETLOADINGLOGIN', payload}
}

export function setNameUser(payload){
  return { type: 'NAME/SETNAME', payload}
}

export function setIdUser(payload){
  return { type: 'IDUSER/SETIDUSER', payload}
}

export function setRoleUser(payload){
  return { type: 'ROLE/SETROLE', payload}
}

export function setDetailKyc(payload){
  return { type: 'DETAILKYC/SETDETAILKYC', payload }
}

export function setloadingDetailKyc(payload){
  return { type: 'LOADINGDETAILKYC/LOADINGDETAILKYC', payload}
}

export function setDataKyc(payload){
  return { type: 'DATAKYC/SETDATAKYC', payload}
}

export function setLoadingDataKyc(payload){
  return { type: 'LOADINGDATAKYC/SETLOADINGDATAKYC', payload}
}

export function setDetailDataKyc(payload){
  return { type: 'DETAILDATAKYC/DETAILDATAKYC', payload}
}

export function setLoadingDetailDataKyc(payload){
  return { type: 'LOADINGDETAILDATAKYC/SETLOADINGDETAILDATAKYC', payload}
}

export function loginUser(email, password){
  return async (dispatch) => {
    try {
      dispatch(setLoadingLogin(true))
      const response = await axios.post(BASEURL + 'users/login',{
        email,
        password
      })

      localStorage.setItem("access_token", response.data.access_token)
      dispatch(setNameUser(response.data.name))
      dispatch(setIdUser(response.data.id))
      dispatch(setRoleUser(response.data.role))
      dispatch(setLoadingLogin(false))
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong email or password!',
      })
      dispatch(setLoadingLogin(false))
    }
  }
}

export function registerUser(name, email, password){
  return async (dispatch) => {
    try {
      const response = await axios.post(BASEURL + 'users/register',{
        name,
        email,
        password,
        role: 'user'
      })

      Swal.fire(
        'Good job!',
        `You successfully created new id "${response.data.name}"!`,
        'success'
      )
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong input data!',
      })
    }
  }
}

export function getKycById(id){
  return async (dispatch) => {
    try {
      const response = await axios.get(BASEURL + `kycs/findone/${id}`,{
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })
      dispatch(setDetailKyc(response.data))
      dispatch(setloadingDetailKyc(false))
    } catch (error) {
      dispatch(setloadingDetailKyc(false))
    }
  }
}

export function addKyc(payload){
  return async (dispatch) => {
    try {
      const response = await axios.post(BASEURL + 'kycs/addkyc', payload,{
        headers:{
          'Content-type': 'multipart/form-data',
          'access_token': localStorage.getItem("access_token")
        }
      })
      Swal.fire(
        'Good job!',
        `You successfully request to upgrade account"!`,
        'success'
      )
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong File Input!',
      })
    }
  }
}

export function fetchDataKyc(){
  return async (dispatch) => {
    try {
      dispatch(setLoadingDataKyc(true))
      const response = await axios.get(BASEURL + 'kycs/getall',{
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })
      console.log(response.data)
      dispatch(setDataKyc(response.data))
      dispatch(setLoadingDataKyc(false))
    } catch (error) {
      console.log(error)
      dispatch(setLoadingDataKyc(false))
    }
  }
}

export function getDetailDataKyc(id){
  return async (dispatch) => {
    try {
      dispatch(setLoadingDetailDataKyc(true))
      const response = await axios.get(BASEURL + 'kycs/detailkyc/' + id,{
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })

      console.log(response.data)
      dispatch(setDetailDataKyc(response.data))
      dispatch(setLoadingDetailDataKyc(false))
    } catch (error) {
      console.log(error)
      dispatch(setLoadingDetailDataKyc(false))
    }
  }
}

export function updateStatusKyc(payload){
  return async (dispatch) => {
    try {
      const response = await axios.patch(BASEURL + 'kycs/updateapproval/' + payload.id,{ status: payload.status },{
        headers:{
          'access_token': localStorage.getItem("access_token")
        }
      })

      Swal.fire(
        'Good job!',
        `Successfully update data!`,
        'success'
      )

    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something Wrong!',
      })
    }
  }
}