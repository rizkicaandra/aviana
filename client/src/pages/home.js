import Navbar from '../components/navbar'
import User from '../components/user'
import Admin from '../components/admin'
import { useSelector } from 'react-redux'

export default function Home(){
  const role = useSelector(state => state.user.role)
  
  return(
    <>
      <Navbar />
      {
        role === 'user' ? <User /> : <Admin />
      }
    </>
  )
}