import { Link } from 'react-router-dom'
export default function Admin(){
  return(
    <>
    <div className="container">
      <div className="row">
          <div className="d-flex justify-content-between" style={{ width: "100%"}}>
            <div className="balance-data display-4">Hy Admin, <Link to="/kyc" style={{ fontSize: "2rem"}}>Click here to check KYC Data</Link></div>
          </div>
      </div>
    </div>
    </>
  )
}