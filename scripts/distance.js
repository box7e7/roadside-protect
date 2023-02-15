import axios from 'axios';
import { conforms } from 'lodash';

// replace the API key with your own


const getDistance=function(origin,destination){

    const API_KEY = 'AIzaSyAcwqHrTymiNEsddvk9W8VkvKg_DlNLeRI';
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?` +`origins=${origin}&destinations=${destination}&key=${API_KEY}`;

    return axios.get(url)
    .then(response => {
        
        if(response.data.error_message){
            console.error(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% ${response.data.error_message} %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`)
            return {error:response.data.error_message}
        }
        else{
            // extract the distance from the response JSON
            const distance_in_meters = response.data.rows[0].elements[0].distance.value;
            // convert the distance to miles
            const distance_in_miles = distance_in_meters / 1609.344;

            console.log(`The distance between ${origin} and ${destination} is ${distance_in_miles.toFixed(2)} miles.`);
            return {distance:`${distance_in_miles.toFixed(2)}`}

        }
    
  })
  .catch(error => {
    console.error(error);
    return {error:error}
  });



}



export {getDistance}