import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginApplyPage } from './login-apply';

@NgModule({
  declarations: [
    LoginApplyPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginApplyPage)
  ],
  exports: [
    LoginApplyPage
  ]
})
export class LoginApplyPageModule {}
