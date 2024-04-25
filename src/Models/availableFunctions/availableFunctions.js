    import {getCurrentWeather,
      
    } from "../functions/functions.js";

    import{
      filterUsersByRating,
      filterUsers,
      updateUser
    } from "../functions/users.js"

    import {
      getAllVacancies,
      filterVacancies,

    } from "../functions/vacancies.js"

    import {

    } from "../functions/chat.js"
    // Step 3: call the function
    // Note: the JSON response may not always be valid; be sure to handle errors
    const availableFunctions = {
        get_current_weather: getCurrentWeather,
        get_all_vacancies: getAllVacancies,
        filter_user_by_rating:filterUsersByRating,
        get_all_vacancies:filterVacancies,
        filter_users:filterUsers,
        update_user:updateUser
        
      }; // only one function in this example, but you can have multiple

export default availableFunctions;

//update name
//send message
//add vacancy
//filter user basis of skills then rating
//doc read job recommend