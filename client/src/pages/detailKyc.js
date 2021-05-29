import Navbar from '../components/navbar'
import { useSelector, useDispatch } from 'react-redux'
import { updateStatusKyc } from '../store/action'

export default function DetailKyc(){
  const dispatch = useDispatch()
  const detailDataKyc = useSelector(state => state.kyc.detailDataKyc)
  const loadingDetailDataKyc = useSelector(state => state.kyc.loadingDetailDataKyc)

  const rejectKyc = (e) => {
    e.preventDefault()
    dispatch(updateStatusKyc({ id: detailDataKyc.id, status: 'reject' }))
  }

  const accpetKyc = (e) => {
    e.preventDefault()
    dispatch(updateStatusKyc({ id: detailDataKyc.id, status: 'approve' }))
  }

  return(
    <>
      <Navbar></Navbar>
      {
        loadingDetailDataKyc ? <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_OdVhgq.json"  background="transparent"  speed="1"  style={{width: "750px", height: "750px", margin: "auto"}}  loop  autoplay></lottie-player> :
        <>
        <div className="container mt-4" style={{paddingTop: "8em"}}>
          <h4 className="display-4 text-center mb-4">DETAIL KYC DATA</h4>
        </div>
        <div className="container" >
          <div className="row d-flex justify-content-between" >
            <div>
              <img src={`/ktp/${detailDataKyc.ktp}`} width={"400"} height={"400"} alt="data1"></img>
              <h4 style={{textAlign: "center"}}>KTP</h4>
              <form onSubmit={rejectKyc}>
                <button type="submit" className="btn btn-outline-danger btn-block mt-5">REJECT</button>
              </form>
            </div>
            <div>
              <img src={`/selfie/${detailDataKyc.selfieUser}`} width={"400"} height={"400"} alt="data2"></img>
              <h4 style={{textAlign: "center"}}>SELFIE PICTURE</h4>
              <form onSubmit={accpetKyc}>
                <button type="submit" className="btn btn-outline-primary btn-block mt-5">ACCEPT</button>
              </form>
            </div>
          </div>
          <div className="row">

          </div>
        </div>
        </>
      }
      
    </>
  )
}