import axios from "axios";

const API_KEY =  "3292a03a851d07582901572e"; // Replace with your actual API key
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

export const fetchExchangeRates = async (currency) => {
  try {
    const response = await axios.get(`${BASE_URL}${currency}`);
    return response.data.conversion_rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
};
