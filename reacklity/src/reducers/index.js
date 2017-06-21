const initialState = {
  title:'Empire Database',
  user:'',
  loggedUser: '',
  data: []
}

export default (state = initialState, action)=>{
  if(action.type === 'UBAH_USER'){
    return {...state, user: action.payload}
  }
  if(action.type === 'SUBMIT_USER'){
    return {...state, loggedUser: action.payload}
  }
  if(action.type === 'LOAD_DATA'){
    return {...state, data: action.payload}
  }
  return state
}