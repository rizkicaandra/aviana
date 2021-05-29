import { useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import Status from './status'
import { getKycById } from '../store/action'

export default function User(){
  const dispatch = useDispatch()
  const name = useSelector(state => state.user.name)
  const idUser = useSelector(state => state.user.idUser)
  const detailKyc = useSelector(state => state.kyc.detailKyc)
  const loadingDetailKyc = useSelector(state => state.kyc.loadingDetailKyc)

  useEffect(() => {
    dispatch(getKycById(idUser))
  },[dispatch,idUser])

  return(
    <>
    <div className="container">
      <div className="row">
          <div className="d-flex justify-content-between" style={{ width: "100%"}}>
            <div className="balance-data display-4">Balance : Rp. 0</div>
            <div className="balance-data display-4">Hy, { name }</div>
          </div>
      </div>
      {
        loadingDetailKyc ? <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_OdVhgq.json"  background="transparent"  speed="1"  style={{width: "750px", height: "750px", margin: "auto"}}  loop  autoplay></lottie-player> :
        <Status detailKyc={detailKyc} />
      }
    </div>
    </>
  )
}