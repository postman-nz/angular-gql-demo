import { IUser, IGroup } from "./models";
import { getIntrospectionQuery } from "graphql";
import _ from "lodash";

export const Users: IUser[] = [
  {
    id: 1,
    email: "first-user@example.com",
    name: "The First User",
    image: "https://picsum.photos/200/300?random=1"
  },
  {
    id: 2,
    email: "second-user@example.com",
    name: "The Second User",
    image: "https://picsum.photos/200/300?random=2"
  },
  {
    id: 3,
    email: "third-user@example.com",
    name: "The Third User",
    image: "https://picsum.photos/200/300?random=3"
  },
  {
    id: 4,
    email: "forth-user@example.com",
    name: "The Forth User"
  }
];

export const Groups: IGroup[] = [
  {
    id: 1,
    name: "Even Group",
    description: "This group is for people who have even IDs",
    ownerId: 2,
    members: [2, 4]
  },
  {
    id: 2,
    name: "Inclusive Group",
    description: "Everyone is welcome here",
    ownerId: 1,
    members: [1, 2, 3, 4]
  }
];

export function GetUser(id: number): IUser | undefined {
  return _.find(Users, { id });
}

export function GetGroup(id: number): IGroup | undefined {
  return _.find(Groups, { id });
}

export function GetUsersForGroup(groupId: number): IUser[] {
  const result: IUser[] = [];
  const group = GetGroup(groupId);
  if (group) {
    for (let id of group.members) {
      const u = GetUser(id);
      if (u) {
        result.push(u);
      }
    }
  }

  return result;
}
