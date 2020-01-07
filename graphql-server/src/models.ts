export interface IUser {
  id: number;
  name: string;
  email: string;
  image?: string;
}

export interface IGroup {
  id: number;
  name: string;
  description: string;
  ownerId: number;
  members: number[];
}
