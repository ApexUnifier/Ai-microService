import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const mainBackend = process.env.MAINBACKEND;


//1) get all Vacancies:

export const getAllVacancies = async () => {
    try {
      // Make a GET request to the specified URL
      console.log("getAllVacancies called");
      console.log(`this is ${mainBackend} url`);
      const response = await axios.get(`${mainBackend}api/vacancy/`);
      // console.log(response.data);
      return JSON.stringify(response.data);

    } catch (error) {
      // Handle any errors that occurred during the request
      
      console.error('Error while sending GET request:', error);
      throw new Error('Failed to send GET request');
    }
  };

//2) Get vacancies by id:

  export const getVacancyById = async (functionArgs) => {
    const id = functionArgs.id;
    console.log("getVacancyById called");
    try {
      const response = await axios.get(`${mainBackend}api/vacancy/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Failed to fetch vacancy");
    }
  };

  //3) getAllbyCompanyID:

export const getAllVacanciesForCompany = async (functionArgs) => {
    const companyId = functionArgs.companyId;
  try {
    const response = await axios.get(`${mainBackend}api/vacancy/company/${companyId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch vacancies for the company");
  }
};

//4) filter:

export const filterVacancies = async (functionArgs) => {
  const reqBody = {};

  if (functionArgs.location) {
    reqBody.location = functionArgs.location;
  }
  
  if (functionArgs.skillsRequired) {
    reqBody.skillsRequired = functionArgs.skillsRequired;
  }
  
  if (functionArgs.companyName) {
    reqBody.companyName = functionArgs.companyName;
  }
  
  if (functionArgs.jobType) {
    reqBody.jobType = functionArgs.jobType;
  }
  

  try {
    const response = await axios.post(`${mainBackend}api/vacancy/filter`, reqBody);
    // console.log(response.data); 
    return JSON.stringify(response.data)// Assuming you want to log the response data
  } catch (error) {
    console.error('Error filtering vacancies:', error);
  }
};

//5) Create vacancy:

export const createVacancy = async (functionArgs) => {
  const requestBody = {
    // Provide the necessary data for creating a vacancy
    // For example:
    title: functionArgs.title,  // data type string
    location: functionArgs.location, // data type string
    skillsRequired: functionArgs.skillsRequired, // data type // array
    companyName: functionArgs.companyName, // data type string
    jobType: functionArgs.jobType // data type string
  };

  try {
    const response = await axios.post(`${mainBackend}api/vacancy/create`, requestBody);
    console.log(response.data); // Assuming you want to log the response data
  } catch (error) {
    console.error('Error creating vacancy:', error);
  }
};







