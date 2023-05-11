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
    case 'CUSTOMERINFO':
      return {...state,customerInfo: action.customerInfo}  
    case 'STRIPEURL':
      return {...state,stripeURL: action.stripeURL}   
    case 'INVOICESTATUS':
      return {...state,invoiceStatus: action.invoiceStatus}
    case 'INVOICEID':
      return {...state,invoiceId: action.invoiceId}  
    case 'DISTANCE':
      return {...state,distance: action.distance} 
    case 'QUESTIONS':
      return {...state,questions: action.questions}        
    default:
    return state
   }
   }
 export default reducerFunction;