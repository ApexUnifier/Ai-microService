    import {getCurrentWeather} from "../functions/functions.js";
    // Step 3: call the function
    // Note: the JSON response may not always be valid; be sure to handle errors
    const availableFunctions = {
        get_current_weather: getCurrentWeather,
      }; // only one function in this example, but you can have multiple
export default availableFunctions;