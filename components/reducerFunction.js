const reducerFunction=(state,action)=>{
    switch (action.type){
    case 'LOGINID':
    return {...state,userId: action.userId}
    case 'LOCATION':
    return {...state,location: action.location}
    default:
    return state
   }
   }
 export default reducerFunction;