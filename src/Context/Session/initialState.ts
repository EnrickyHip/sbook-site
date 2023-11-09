import { User } from "@/domain/entity/User";

export type SessionState = {
  loggedIn: boolean;
  user: User | null;
  updateRequested: boolean;
};

export const initialState: SessionState = {
  loggedIn: false,
  user: null,
  updateRequested: false,
};
