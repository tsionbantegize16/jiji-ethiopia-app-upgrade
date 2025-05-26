// types/user.ts
export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
  // Add other user-related properties
  // authToken?: string;
  // roles?: string[];
}