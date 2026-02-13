// src/api/roomsApi.js
// import apiClient from "./apiClient";
import axios, { AxiosError } from "axios";
import {
  RoomsGroupedResponse,
  AvailableRoomCategoryResponse,
  AvailableRoomsResponse,
  GetAvailableRoomsParams,
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
  adults: number;
  infants: number;
}
// Search available rooms by check-in/checkout dates and guest count
export const searchAvailableRooms = async ({
  checkin,
  checkout,
  adults,
  infants,
}: SearchAvailableRoomsParams): Promise<AvailableRoomCategoryResponse> => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/public/search-rooms`, {
      params: { checkin, checkout, adults, infants },
    });
    console.log("Response with params", response.data);

    return response.data;
  } catch (err: any) {
    const message =
      err.response?.data?.message || "Failed to fetch available rooms";
    throw new Error(message);
  }
};

// Get all rooms grouped by category (no date filtering)
export const getAllRoomsByCategory =
  async (): Promise<RoomsGroupedResponse> => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/public/rooms-by-category`,
      );
      console.log("rooms by category response", response.data);

      return response.data;
    } catch (error) {
      console.error("Error fetching rooms by category:", error);
      throw new Error("Failed to fetch rooms by category");
    }
  };

// Get weather forecast data from OpenWeatherMap
export const getWeatherData = async () => {
  try {
    const response = await axios.get(`${WEATHERAPI_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error("Failed to fetch weather data");
  }
};

// Create a new booking reservation
export const createBooking = async (bookingData: PostBookingData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/public/bookings`,
      bookingData,
    );
    return response.data;
  } catch (err: any) {
    const message = err.response?.data?.message || "Failed to create booking";
    console.log("Booking error message", message);
    throw new Error(message);
  }
};

// Get Google reviews
export const getReviews = async () => {
  const response = await axios.get(`${BACKEND_URL}/api/public/reviews`);
  // console.log("Google_Review_Response", response.data);
  return response.data;
};
// Get all publicly visible rooms with optional category filter
export const getAllPublicRooms = async (
  params?: GetAvailableRoomsParams,
): Promise<AvailableRoomsResponse> => {
  const response = await axios.get<AvailableRoomsResponse>(
    `${BACKEND_URL}/api/public/rooms`,
    {
      params: {
        category: params?.category,
      },
    },
  );
  console.log("All public rooms response", response.data);
  return response.data;
};
