import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import gql from "graphql-tag";

export interface Groups {
  name: string;
  owner: User;
  members: User[];
}

export interface User {
  profile: string;
  name: string;
}

@Injectable({
  providedIn: "root"
})
export class GroupsService {
  constructor(private apollo: Apollo) {}

  public getGroups(): Observable<Groups> {
    return this.apollo
      .watchQuery<any>({
        query: gql`
          query {
            Groups {
              name
              owner {
                id
                profile
              }
              members {
                id
                profile
              }
            }
          }
        `
      })
      .valueChanges.pipe(
        map(result => {
          return result.data.Groups;
        })
      );
  }
}
