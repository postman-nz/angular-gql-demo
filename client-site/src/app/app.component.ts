import { Component, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

interface UserModel {
  name: string;
  profile: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  user: UserModel;
  loading: boolean;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery<any>({
        query: gql`
          query {
            Me {
              name
              profile
            }
          }
        `
      })
      .valueChanges.subscribe(result => {
        this.loading = result.loading;
        this.user = result.data && result.data.Me;
      });
  }
}
