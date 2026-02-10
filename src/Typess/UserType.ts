// Define an Address interface




export interface Address {
    id?: number;
    name: string;
    mobile: string;
    pinCode: string;
    address: string;
    locality: string;
    city: string;
    state: string;
  }

  
  // Define an enum for User Roles
  export enum UserRole {
    ROLE_CUSTOMER = 'ROLE_CUSTOMER',
    ROLE_ADMIN = 'ROLE_ADMIN',
    ROLE_SELLER = 'ROLE_SELLER',
  }

  // Define a User interface
export interface User {
    id?: number;
    password?: string;
    email: string;
    fullName: string;
    mobile: string;
    role: UserRole;
    addresses?: Address[];
  }
  
  // Define a UserState interface for managing user state
  export interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
    profileUpdated: boolean;
  }
  
  