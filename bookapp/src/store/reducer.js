const initialState = {
   isAuthenticated : false,
   url : "http://localhost:3050/api/getBooks/allbooks"
}

const reducer = (state = initialState, action) => {

  if(action.type == "AUTHENTICATED") {
    return {
      ...state,
      isAuthenticated : true
    }
  } else if(action.type == "NOTAUTHENTICATED"){
     return {

     ...state,
    isAuthenticated : false
  }
} else if(action.type == "GENRE"){
  return {  ...state,
    url: `http://localhost:3050/api/getBooks/${action.genre}`

}
}

  return state
}

export default reducer
