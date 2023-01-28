const reducerFunction=(state,action)=>{
    switch (action.type){
    case 'LOGINID':
      return {...state,userId: action.userId}
    case 'LOCATION':
      return {...state,location: action.location}
    case 'SERVICE':
      return {...state,service: action.service}
    case 'ADDRESS':
      return {...state,address: action.address}
    case 'VEHICLE':
      return {...state,vehicle: action.vehicle}
    case 'STEPS':
      return {...state,steps: action.steps}  
    case 'DROPOFFADDRESS':
      return {...state,dropoffAddress: action.dropoffAddress}  
    default:
    return state
   }
   }
 export default reducerFunction;