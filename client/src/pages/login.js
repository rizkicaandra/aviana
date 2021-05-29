import { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, Link } from 'react-router-dom'
import { loginUser } from "../store/action"

export default function Login(){
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const loadingLogin = useSelector(state => state.user.loadingLogin)
  const history = useHistory()

  const loginToInsta = (e) => {
    e.preventDefault()
    dispatch(loginUser(email, password))

    setEmail('')
    setPassword('')

    history.push('/home')
  }

  useEffect(() => {
    if(localStorage.getItem("access_token")){
      history.push('/home')
    }
  },[dispatch, history])

  return(
    <>
    {
      loadingLogin ? <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_OdVhgq.json"  background="transparent"  speed="1"  style={{width: "750px", height: "750px", margin: "auto"}}  loop  autoplay></lottie-player> :
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo">
          </div>
            <div className="form-data">
              <form action="" onSubmit={loginToInsta}>
                <div className="logo">
                  KYC
                </div>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value) } />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="form-btn" type="submit">Log in</button>
              </form>
              <div className="sign-up">
                Don't have an account? <Link to="/register">Register</Link>
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