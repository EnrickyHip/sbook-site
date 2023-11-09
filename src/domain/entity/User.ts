export interface User {
  id: number;
  password: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  birth_date: null | string;
  profile_picture: null | string;
  bio: null | string;
  sex: null | string;
  gender: null | string;
  created_at: string;
  updated_at: string;
  pseudo_name: null | string;
}
