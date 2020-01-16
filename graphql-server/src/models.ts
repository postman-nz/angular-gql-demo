export interface IUser {
  id: number;
  name: string;
  email: string;
  profile?: string;
}

export interface IGroup {
  id: number;
  name: string;
  description: string;
  ownerId: number;
  members: number[];
}
