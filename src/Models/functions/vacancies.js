import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const mainBackend = process.env.MAINBACKEND;


//1) get all Vacancies

export const getAllVacancies = async () => {
    try {
      // Make a GET request to the specified URL

      console.log(`this is ${mainBackend} url`);
      const response = await axios.get(`${mainBackend}api/vacancy/`);
      console.log(response.data);
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
    try {
      const response = await axios.get(`${mainBackend}api/vacancy/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || "Failed to fetch vacancy");
    }
  };

  //3) getAllbyCompanyID

export const getAllVacanciesForCompany = async (functionArgs) => {
    const companyId = functionArgs.companyId;
  try {
    const response = await axios.get(`${mainBackend}api/vacancy/company/${companyId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Failed to fetch vacancies for the company");
  }
};


//4) filter








