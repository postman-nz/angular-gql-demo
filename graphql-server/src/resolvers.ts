import { IResolvers } from "graphql-tools";
import {
  Users,
  Groups,
  GetUser,
  GetGroup,
  GetUsersForGroup
} from "./connectors";
import { IUser, IGroup } from "./models";

const resolvers: IResolvers = {
  Query: {
    Users: (_: void, args: void): IUser[] => Users,

    User: (_: void, args: { id: string }): IUser | undefined =>
      GetUser(parseInt(args.id))
  }
};

export default resolvers;
