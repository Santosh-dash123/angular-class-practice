export interface Registration {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  city: string; //Dropdown
}

export interface City {
  id: number;
  name: string;
}
