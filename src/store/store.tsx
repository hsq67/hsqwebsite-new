import { create } from "zustand";
import {
  RoomsGroupedResponse,
  AvailableRoomCategoryResponse,
} from "@/types/Room";
import { BookingFormDataType } from "@/types/BookingForm";
import { ReviewSummary } from "@/types/Review";
// import Review from "@/pages/Review";
// interface BookingFormDataType {
//   name: string;
//   contact: string;
//   address: string;
//   email: string;
//   cnic: string;
//   arrivaltime: string;
//   promocode: string;
//   requestmsg: string;
//   paymentmethod: string;
// }
interface RoomState {
  // All rooms grouped by category
  rooms: RoomsGroupedResponse;
  setRooms: (rooms: RoomsGroupedResponse) => void;

  // Available rooms (filtered by date/guests)
  availableRooms: AvailableRoomCategoryResponse;
  setAvailableRooms: (availableRooms: AvailableRoomCategoryResponse) => void;

  // Booking widget state (check-in/checkout dates)
  bookingWidget: {
    checkin: string;
    checkout: string;
  };
  setBookingWidget: (data: { checkin: string; checkout: string }) => void;

  // Booking form data
  bookingFormData: BookingFormDataType;
  setBookingFormData: (data: BookingFormDataType) => void;
}

interface ReviewState {
  reviews: ReviewSummary[];
  setReviews: (reviews: ReviewSummary[]) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
  rooms: [],
  availableRooms: [],
  bookingWidget: {
    checkin: "",
    checkout: "",
  },
  bookingFormData: {
    name: "",
    contact: "",
    address: "",
    email: "",
    cnic: "",
    arrivaltime: "",
    promocode: "",
    requestmsg: "",
    paymentmethod: "",
    terms: "",
  },
  setRooms: (rooms) => set({ rooms }),
  setAvailableRooms: (availableRooms) => set({ availableRooms }),
  setBookingWidget: (data) =>
    set(() => ({
      bookingWidget: data,
    })),
  setBookingFormData: (data) =>
    set((state) => ({
      bookingFormData: { ...state.bookingFormData, ...data },
    })),
}));

export const useReviewStore = create<ReviewState>((set) => ({
  reviews: [],
  setReviews: (reviews) => set({ reviews }),
}));
