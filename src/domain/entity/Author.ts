export interface Author {
  id: number;
  first_name: string;
  last_name: string | null;
  birth_date: string | null;
  profile_picture: string | null;
  bio: string | null;
  sex: string | null;
  gender: string | null;
  created_at: string;
  updated_at: string;
  pseudo_name: string | null;
  death_day: string | null;
  home_country: string | null;
  home_state: string | null;
  home_town: string | null;
}
