import Navbar from '../components/navbar'
import { useState} from "react"
import { useDispatch } from "react-redux"
import { addKyc } from "../store/action"
import { useHistory } from "react-router-dom";

export default function AddKyc(){
  const history = useHistory()
  const dispatch = useDispatch()
  const [ktpFile, setKtpFile] = useState('')
  const [ktpFileName, setKtpFileName] = useState('Choose KTP Image')
  const [selfie, setSelfie] = useState('')
  const [selfieName, setSelfieName] = useState('Choose Selfie holding KTP Image')

  const chosenKTP = (e) => {
    setKtpFile(e.target.files[0])
    setKtpFileName(e.target.files[0].name)
  }

  const chosenSelfie = (e) => {
    setSelfie(e.target.files[0])
    setSelfieName(e.target.files[0].name)
  }

  const addKycData = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('ktpFile', ktpFile)
    formData.append('selfie', selfie)

    dispatch(addKyc(formData))
    setKtpFile('')
    setKtpFileName('Choose KTP Image')
    setSelfie('')
    setSelfieName('Choose Selfie holding KTP Image')
  }

  return(
    <>
      <Navbar />
      <div className="container mt-4" style={{paddingTop: "8em"}}>
        <h4 className="display-4 text-center mb-4">SUBMIT YOUR DATA</h4>
      </div>
      <div className="container" style={{paddingTop: "2em", paddingLeft: "20em", paddingRight: "20em"}}>
        <form onSubmit={addKycData}>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" onChange={chosenKTP}></input>
            <label className="custom-file-label" htmlFor="customFile">{ktpFileName}</label>
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile" onChange={chosenSelfie}></input>
            <label className="custom-file-label" htmlFor="customFile">{selfieName}</label>
          </div>
          <button type="submit" className="btn btn-outline-primary btn-block mt-5">SUBMIT</button>
        </form>
          <button type="submit" className="btn btn-outline-danger btn-block" onClick={(e)=> { history.push('/home') }}>CANCEL</button>
      </div>
    </>
  )
}