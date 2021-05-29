import { useEffect} from "react"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/navbar'
import { fetchDataKyc, getDetailDataKyc } from '../store/action'

export default function KYC(){
  const dispatch = useDispatch()
  const history = useHistory()
  const dataKyc = useSelector(state => state.kyc.dataKyc)
  const loadingDataKyc = useSelector(state => state.kyc.loadingDataKyc)

  useEffect(() => {
    dispatch(fetchDataKyc())
  },[dispatch])

  return(
    <>
      <Navbar />
      {
      loadingDataKyc ? <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_OdVhgq.json"  background="transparent"  speed="1"  style={{width: "750px", height: "750px", margin: "auto"}}  loop  autoplay></lottie-player> :
      <>
        <div className="container mt-4" style={{paddingTop: "8em"}}>
          <h4 className="display-4 text-center mb-4">KYC DATA</h4>
        </div>
        <div className="container">
          <table className="table table-light">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                dataKyc.map((data, nomor) => (
                  <tr>
                    <td>{nomor + 1 }</td>
                    <td>{data.User.name}</td>
                    <td>{data.User.email}</td>
                    <td>{data.statusApproval}</td>
                    <td><button type="button" className="btn btn-outline-info" onClick={() => {history.push(`/detailkyc/${data.id}`); dispatch(getDetailDataKyc(data.id))}}>Detail</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </>
    }
    </>
  )
}