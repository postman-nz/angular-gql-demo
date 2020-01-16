import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfilePictureComponent } from "./profile-picture/profile-picture.component";

@NgModule({
  declarations: [ProfilePictureComponent],
  exports: [ProfilePictureComponent],
  imports: [CommonModule]
})
export class CoreModule {}
