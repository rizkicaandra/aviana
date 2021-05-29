const initialState = {
  loadingDetailKyc: true,
  detailKyc: [],
  loadingDataKyc: false,
  dataKyc: [],
  loadingDetailDataKyc: false,
  detailDataKyc: [],
}

function reducer(state = initialState, actions){
  const {type, payload} = actions
  switch (type) {
    case 'LOADINGDETAILKYC/LOADINGDETAILKYC':
      return { ...state, loadingDetailKyc: payload}
    case 'DETAILKYC/SETDETAILKYC':
      return { ...state, detailKyc: payload}
    case 'LOADINGDATAKYC/SETLOADINGDATAKYC':
      return { ...state, loadingDataKyc: payload}
    case 'DATAKYC/SETDATAKYC':
      return { ...state, dataKyc: payload}
    case 'LOADINGDETAILDATAKYC/SETLOADINGDETAILDATAKYC':
      return { ...state, loadingDetailDataKyc: payload}
    case 'DETAILDATAKYC/DETAILDATAKYC':
      return { ...state, detailDataKyc: payload}
    default :
      return state
  }
}

export default reducer
