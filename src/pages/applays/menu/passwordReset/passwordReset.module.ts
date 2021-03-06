import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicPageModule } from "ionic-angular";
import { uploadIimgVideoFileModule } from '../../../../components/upload-img-video-file/upload-img-video-file.module';
import { passwordResetPage } from './passwordReset';


@NgModule({
  declarations: [
    passwordResetPage,
  ],
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    uploadIimgVideoFileModule,
    IonicPageModule.forChild(passwordResetPage),
  ],
})
export class passwordResetModule {}
