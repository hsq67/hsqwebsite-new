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
  //   additional data
  //   roomId: string;
  //   checkInDate: string;
  //   checkOutDate: string;
}
