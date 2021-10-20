import React, { useState } from 'react';
import { DirectionsRenderer,LoadScript,GoogleMap, DirectionsService } from '@react-google-maps/api';


const containerStyle = {
    width: '100vw',
    height: '500px'
  };
  
  const location = {
    lat: -3.745,
    lng: -38.523
  };
const Directionmap = ({destination,origin}) => {
    const [response,setResponse] = useState(null)
    const directionsCallback =res=>{
        if(res != null){
            setResponse(null)
        }
    }
    console.log(destination,origin);
    return (
        <div className='map-container'>
            <LoadScript
              googleMapsApiKey="YOUR_API_KEY"
            >
        <GoogleMap
          // required
          id='direction-example'
          // required
          mapContainerStyle={{
            height: '400px',
            width: '100%'
          }}
          // required
          zoom={2}
          // required
          center={location}
          
        >
         
              <DirectionsService
                // required
                options={{ 
                  destination: "muhammadpur bus station",
                  origin: "comolapur bus station",
                  travelMode: "DRIVING"
                }}
                // required
                callback={directionsCallback}
              />
            )
          

          {
            response !== null && (
              <DirectionsRenderer
                // required
                options={{ 
                  directions: response
                }}
               
              />
            )
          }
        </GoogleMap>
       </LoadScript>
      </div>
    );
};

export default Directionmap;