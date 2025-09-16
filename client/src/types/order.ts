import { UserData } from './users';

export interface OrderField {
  name: keyof UserData;
  label: string;
  placeholder?: string;
}
