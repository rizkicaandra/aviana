// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { useHistory, Link } from 'react-router-dom'
import { useState, useEffect} from "react"
import { registerUser } from "../store/action"

export default function Register(){
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  useEffect(() => {
    if(localStorage.getItem("access_token")){
      history.push('/home')
    }
  },[dispatch, history])

  const addNewUser = (e) => {
    e.preventDefault()
    dispatch(registerUser(name, email, password))

    setName('')
    setEmail('')
    setPassword('')
  }

  return(
    <>
      {
      false ? <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_OdVhgq.json"  background="transparent"  speed="1"  style={{width: "750px", height: "750px", margin: "auto"}}  loop  autoplay></lottie-player> :
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo">
          </div>
            <div className="form-data">
              <form action="" onSubmit={addNewUser}>
                <div className="logo">
                  <h1>Register</h1>
                </div>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="form-btn" type="submit">Register</button>
              </form>
              <div className="sign-up">
                 <Link to="/">Back to Login Page</Link>
              </div>
              <div className="get-the-app">
                <span>Get the app</span>
                <div className="badge">
                  <img src={"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"} alt="android App" />
                  <img src={"https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"} alt="ios app" />
                </div>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  )
}