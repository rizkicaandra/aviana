const initialState = {
  loadingLogin: false,
  name: '',
  idUser: '',
  role: '',
}

function reducer(state = initialState, actions){
  const {type, payload} = actions
  switch (type) {
    case 'LOADINGLOGIN/SETLOADINGLOGIN':
      return { ...state, loadingLogin: payload}
    case 'IDUSER/SETIDUSER':
      return { ...state, idUser: payload}
    case 'NAME/SETNAME':
      return { ...state, name: payload}
    case 'ROLE/SETROLE':
      return { ...state, role: payload}
    default :
      return state
  }
}

export default reducer
