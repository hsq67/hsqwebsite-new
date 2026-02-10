// src/api/roomsApi.js
// import apiClient from "./apiClient";
import axios, { AxiosError } from "axios";
import {
  RoomsGroupedResponse,
  AvailableRoomGroupedResponse,
} from "@/types/Room";
import { BookingFormDataType, PostBookingData } from "@/types/BookingForm";
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
const latitude = 33.91511892911634;
const longitude = 73.41887619512994;
const WEATHERAPI_URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${APIKEY}`;
// console.log("BackendURL", BACKEND_URL);

interface SearchAvailableRoomsParams {
  checkin: string;
  checkout: string;
  guests: string;
}
interface FormBookingData {}
// For the search results
export const SearchAvailableRooms = async ({
  checkin,
  checkout,
  guests,
}: SearchAvailableRoomsParams): Promise<AvailableRoomGroupedResponse> => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/public/available-rooms`,
      {
        params: { checkin, checkout, guests },
      }
    );
    // console.log("Response", response.data);

    return response.data;
  } catch (err: any) {
    const message =
      err.response?.data?.message || "Failed to fetch available rooms";
    throw new Error(message);
  }
};

// new api
export const Get_All_Available_Room =
  async (): Promise<RoomsGroupedResponse> => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/public/category-details`
      );
      console.log("GET Available Response", response.data);

      return response.data;
    } catch (error) {
      console.error("Error fetching rooms:", error);
      throw new Error("Failed to fetch available rooms");
    }
  };

// new api
export const WeatherApi = async () => {
  try {
    const response = await axios.get(`${WEATHERAPI_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw new Error("Failed To Fetch Available Rooms");
  }
};

// Create Reservation Api
export const CreateReservation = async (BookingData: PostBookingData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/public/reservations`,
      BookingData
    );
    return response.data;
  } catch (err: any) {
    const message =
      err.response?.data?.message || "Failed to fetch available rooms";
    console.log(" ReservationMessage", message);
    throw new Error(message);
  }
};

// Google Review Api
export const GoogleReview = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/public/googlereview`);
  // console.log("Goole_Review_Response", response.data);
  return response.data;
};
