import { Component, OnInit } from "@angular/core";
import { GroupsService, Groups } from "../groups.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  groups: Observable<Groups>;

  constructor(private dataService: GroupsService) {}

  ngOnInit() {
    this.groups = this.dataService.getGroups();
  }
}
