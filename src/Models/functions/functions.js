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

  export const getAllVacancies = async () => {
    try {
      // Make a GET request to the specified URL

      console.log(`this is ${mainBackend} url`);
      const response = await axios.get(`${mainBackend}api/vacancy`);
      console.log(response.data);
      return JSON.stringify(response.data);

    } catch (error) {
      // Handle any errors that occurred during the request
      
      console.error('Error while sending GET request:', error);
      throw new Error('Failed to send GET request');
    }
  };
