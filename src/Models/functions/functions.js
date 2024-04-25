// backend API or an external API
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const mainBackend = process.env.MAINBACKEND;

export const getCurrentWeather = (functionArgs)=> {
  console.log("getWeather has been called");
  const location = functionArgs.location;
  const unit = functionArgs.unit || "fahrenheit";
  
    if (location.toLowerCase().includes("tokyo")) {
      return JSON.stringify({ location: "Tokyo", temperature: "10", unit: "celsius" });
    } else if (location.toLowerCase().includes("san francisco")) {
      return JSON.stringify({ location: "San Francisco", temperature: "72", unit: "fahrenheit" });
    } else if (location.toLowerCase().includes("paris")) {
      return JSON.stringify({ location: "Paris", temperature: "22", unit: "fahrenheit" });
    } else {
      return JSON.stringify({ location, temperature: "unknown" });
    }
  }

  

  export const filterUsersByRating = async (functionArgs) => {
    console.log('filtering by rating..');
    const ratingScore = functionArgs.ratingScore;
    try {
      // Make a POST request to the endpoint
      const response = await axios.post(`${mainBackend}api/user/filterusersbyrating`, { ratingScore });
  
      // Return the response data
      return JSON.stringify(response.data);
    } catch (error) {
      // Handle error
      console.error('Failed to filter users:', error.response.data);
      return 'internal error';
    }
  };