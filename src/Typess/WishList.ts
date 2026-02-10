import { Product } from "./ProductType";
import { User } from "./UserType";


// Interface for a Wishlist
export interface Wishlist {
    id: number;
    user: User;
    products: Product[];
  }
  
  // Interface for the Wishlist State
  export interface WishlistState {
    wishlist: Wishlist | null;
    loading: boolean;
    error: string | null;
  }
  
  // Payload interfaces for async thunks
  export interface AddProductToWishlistPayload {
    wishlistId: number;
    productId: number;
  }
  