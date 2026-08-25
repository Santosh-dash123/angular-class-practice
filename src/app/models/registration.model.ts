export interface Registration {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  cityid: number;
  city: string;
}

export interface City {
  id: number;
  name: string;
}
