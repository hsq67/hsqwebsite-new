import { create } from "zustand";
import {
  RoomsGroupedResponse,
  AvailableRoomGroupedResponse,
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
  // For get api
  rooms: RoomsGroupedResponse; // store the rooms data
  setRooms: (rooms: RoomsGroupedResponse) => void; // function to update rooms
  AvaibleRooms: AvailableRoomGroupedResponse;
  setAvaibleRooms: (AvaibleRooms: AvailableRoomGroupedResponse) => void;
  // Save checkin and Check out
  Bookingwidget: {
    checkin: string;
    checkout: string;
  };
  setBookingwidget: (data: { checkin: string; checkout: string }) => void;
  BookingFormData: BookingFormDataType;
  setBookingFormData: (data: BookingFormDataType) => void;
}

interface ReviewState {
  reviews: ReviewSummary[];
  setReviews: (reviews: ReviewSummary[]) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
  rooms: [],
  AvaibleRooms: [],
  Bookingwidget: {
    checkin: "",
    checkout: "",
  },
  BookingFormData: {
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
  setAvaibleRooms: (AvaibleRooms) => set({ AvaibleRooms }),
  setBookingwidget: (data) =>
    set(() => ({
      Bookingwidget: data,
    })),
  setBookingFormData: (data) =>
    set((state) => ({
      BookingFormData: { ...state.BookingFormData, ...data },
    })),
}));

export const useReviewStore = create<ReviewState>((set) => ({
  reviews: [],
  setReviews: (reviews) => set({ reviews }),
}));
