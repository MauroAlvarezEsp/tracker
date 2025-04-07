import { User } from "./User";

export type SessionPayload = {
  user: User;
  expiresAt: Date;
};
