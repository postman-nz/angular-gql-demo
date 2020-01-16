import { IResolvers } from "graphql-tools";
import {
  Users,
  Groups,
  GetUser,
  GetGroup,
  GetUsersForGroup,
  CurrentUser
} from "./connectors";
import { IUser, IGroup } from "./models";
import { ClientRequestArgs } from "http";

const resolvers: IResolvers = {
  Query: {
    Me: (_: void, args: void): IUser => CurrentUser,
    Users: (_: void, args: void): IUser[] => Users,

    User: (_: void, args: { id: string }): IUser | undefined =>
      GetUser(parseInt(args.id)),

    Groups: (_: void, args: void): IGroup[] => Groups,
    Group: (_: void, args: { id: string }): IGroup | undefined =>
      GetGroup(parseInt(args.id))
  },
  Group: {
    owner: (parentGroup: IGroup, args: void): IUser | undefined =>
      GetUser(parentGroup.id),
    members: (parentGroup: IGroup, args: void): IUser[] =>
      GetUsersForGroup(parentGroup.id)
  }
};

export default resolvers;
