import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


function WatchWhether() {
    const [location, setLocation] = useState(null);

  useEffect(() => {
    // // Check if the Geolocation API is available in the browser
    // if ("geolocation" in navigator) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       // Access the latitude and longitude from the position object
    //       const { latitude, longitude } = position.coords;
    //       setLocation({ latitude, longitude });
    //     },
    //     (error) => {
    //       console.error("Error getting location:", error.message);
    //     }
    //   );
    // } else {
    //   console.error("Geolocation is not available in this browser.");
    // }
axios.get("https://www.visualcrossing.com/weather-history/40.7128,-74.0060/us/2021-06-01").then((res)=>setLocation(res.data))
  }, []);

  return (
    <div>
      {/* {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      ) : (
        <p>Getting your location...</p>
      )} */}

      {location}
    </div>
  );
}

export default WatchWhether