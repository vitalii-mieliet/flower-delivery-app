export interface Shop {
  _id: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  description?: string;
  logoUrl?: string;
  isActive: boolean;
}

export interface ShopsApiResponse {
  status: string;
  data: Shop[];
}
