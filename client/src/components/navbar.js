import { useHistory, Link } from 'react-router-dom'
// import { useEffect} from "react"
import { setNameUser, setRoleUser, setIdUser } from '../store/action'
import { useDispatch } from 'react-redux'

export default function Navbar(){
  const history = useHistory()
  const dispatch = useDispatch()
  
  const userLogout = (e) => {
    dispatch(setNameUser(''))
    dispatch(setRoleUser(''))
    dispatch(setIdUser(''))
    localStorage.clear()
    history.push('/')
  }

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top d-flex justify-content-between">
        <div className="d-flex justify-content-center set-navbar-container">
          <img src={"https://img.favpng.com/14/4/18/check-mark-icon-png-favpng-7ya4bMmsVAD2uGUXu83M58eY3.jpg"} width="55" height="40" className="d-inline-block align-top" alt={"logo"} />
          <span className="separator"> | </span>
          <Link to="/home" style={{textDecoration: "none"}}> <span className="header-logo"> KYC APP </span> </Link>
        </div>
        <div className="mr-5 set-navbar-link">
          <i className="fas fa-sign-out-alt" onClick={userLogout}></i>
        </div>
      </nav>
    </>
  )
}