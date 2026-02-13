// that type for category rooms api which room show on booking page and indexpage
interface Room {
  id?: string;
  rate: number;
  images: string[];
  publicName: string;
  publicDescription: string;
  adults: number;
  infants: number;
}
interface AvailableRoom {
  _id: string;
  view: string;
  roomNumber: string;
  rate: number;
  images: string[];
  adults: number;
  infants: number;
}
export interface AvailableRoomCategory {
  adultsCapacity: string;
  infantsCapacity: string;
  amenities?: string[] | null;
  availableCount?: number;
  availableRooms: AvailableRoom[];
  bedType: string;
  category: string;
  cleanliness?: string | null;
  imageUrl?: string | null;
  publicDescription?: string | null;
  publicName: string;
  startingRate: number;
}
export type AvailableRoomCategoryResponse = AvailableRoomCategory[];

export interface CategoryGroup {
  categoryName: string;
  rooms: Room[];
}
export type RoomsGroupedResponse = CategoryGroup[];

// Backend-supported categories
export type BackendRoomCategory =
  | "Standard"
  | "Duluxe-Plus"
  | "Deluxe"
  | "Executive"
  | "Presidential";

// UI-supported categories (includes "All")
export type RoomCategory = BackendRoomCategory | "All";

// Available Room details from API
export interface AvailableRoomDetail {
  id: string;
  rate: number;
  amenities: string[];
  images: string[];
  description?: string;
  adults: number;
  infants: number;
  roomCapacity: number;
  roomNumber: string;
  bedType: "Studio" | "One Bed" | "Two Bed";
  cleanliness: string;
  view: "Lobby Facing" | "Terrace View" | "Valley View" | "Corner";
  category: BackendRoomCategory;
  publicName?: string;
  publicDescription?: string;
}

// API Response
export interface AvailableRoomsResponse {
  success: boolean;
  count: number;
  rooms: AvailableRoomDetail[];
}

// Request parameters for room fetching
export interface GetAvailableRoomsParams {
  category?: BackendRoomCategory;
}
