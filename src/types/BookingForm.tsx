export interface BookingFormDataType {
  name: string;
  contact: string;
  address: string;
  email: string;
  cnic: string;
  arrivaltime: string;
  promocode?: string;
  requestmsg?: string;
  paymentmethod: string;
  terms: string;
}

// Booking search criteria (used in booking widget and filtering)
export interface BookingSearchCriteria {
  checkin: string;
  checkout: string;
  adults: number;
  infants: number;
}

export interface PostBookingData {
  fullName: string;
  address: string;
  phone: string;
  email: string;
  cnic: string;
  specialRequest?: string;
  paymentMethod: string;
  promoCode?: string;
  expectedArrivalTime: string;
}
