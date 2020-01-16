import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { GroupsService } from "./groups.service";
import { MatCardModule } from "@angular/material/card";
import { CoreModule } from "../core/core.module";

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  providers: [GroupsService],
  imports: [CommonModule, MatCardModule, CoreModule]
})
export class GroupsModule {}
