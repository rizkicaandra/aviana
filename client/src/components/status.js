import { Link } from 'react-router-dom'

export default function Status({ detailKyc }){
  return(
    <>
      {
        detailKyc.message ? 
        <div className="row mt-5">
          <div className="error box">You haven't upgraded your account to super user</div>
          <Link className="btn btn-outline-dark btn-lg upgrade-btn" to="/addkyc"><p style={{ fontSize: "1.5em", paddingTop:"11px"}}>UPGRADE</p></Link>
        </div> :
        detailKyc[detailKyc.length - 1].statusApproval === 'approve' ? 
        <div className="row mt-5">
          <div className="success-box box">Hore, You Have successfully upgraded to super account</div>
        </div>
        : detailKyc[detailKyc.length - 1].statusApproval === 'reject' ?
        <div className="row mt-5">
          <div className="warning-box box">Your request has been rejected due to invalid ktp / selfie, please submit again</div>
          <Link className="btn btn-outline-dark btn-lg upgrade-btn" to="/addkyc"><p style={{ fontSize: "1.5em", paddingTop:"11px"}}>UPGRADE</p></Link>
        </div>
        : detailKyc[detailKyc.length - 1].statusApproval === 'submit' ?
        <div className="row mt-5">
          <div className="info-box box">Waiting for KYC Verification</div>
        </div>
        : 'asd'
      }
    </>
  )
}