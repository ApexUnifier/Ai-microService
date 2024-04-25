import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const mainBackend = process.env.MAINBACKEND;


// filterUsers,



export const filterUsers = async (functionArgs) => {
    const skills = functionArgs.skills // example ['JavaScript', 'React']
    try {
      const response = await axios.post(`${mainBackend}/api/user/filter`, { skills });
      console.log(response.data); // Assuming you want to log the filtered users data
      return JSON.stringify(response.data);
    } catch (error) {
      console.error('Error filtering users:', error);
    }
  };



// updateUser,


export const updateUser = async (functionArgs) => {
    const userId = functionArgs.userId;
    const userData = functionArgs.userData;
    //example of user data
    // const userData = {
    //     name: 'Updated Name',
    //     email: 'updated_email@example.com',
    //     password: 'new_password',
    //     phoneNo: '1234567890',
    //     about: 'Updated about information',
    //     skills: ['Skill 1', 'Skill 2'],
    //     ratingScore: 4.5
    //   };

    try {
      const response = await axios.post(`${mainBackend}api/user/update/${userId}`, userData);
      console.log(response.data); // Assuming you want to log the updated user data
      return JSON.stringify(response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };


// getUserById,



// Function to get a user by ID
export const getUserById = async (functionArgs) => {
    const userId = functionArgs.userId;
  try {
    const response = await axios.get(`${mainBackend}/api/user/${userId}`);
    console.log(response.data); // Assuming you want to log the user data
    return JSON.stringify(response.data);
  } catch (error) {
    console.error('Error getting user:', error);
  }
};


// filterUsersByRating,


export const filterUsersByRating = async (functionArgs) => {
    console.log('filtering by rating..');
    const ratingScore = functionArgs.ratingScore;
    console.log(ratingScore);
    try {
      // Make a POST request to the endpoint
      const response = await axios.post(`${mainBackend}api/user/filterusersbyrating`, { ratingScore });
      console.log(response);
  
      // Return the response data
      return JSON.stringify(response.data);
    } catch (error) {
      // Handle error
      console.error('Failed to filter users:', error.response.data);
      return 'internal error';
    }
  };