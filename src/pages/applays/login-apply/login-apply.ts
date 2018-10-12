import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-apply',
  templateUrl: 'login-apply.html',
})
export class LoginApplyPage {
  loginFormData: object;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController, public toastController: ToastController) {
    this.loginFormData = {
      account: '',
      password: ''
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  savelogin() {
    if (this.loginFormData['account'] === '') {
      this.toast('用户名不能为空', 2000, 0)
      return;
    } else if (this.loginFormData['password'] === '') {
      this.toast('密码不能为空', 2000, 0)
      return;
    }
    const loading = this.loadingController.create({
    })
    loading.present();
    setTimeout(() => {
      loading.dismiss();
      console.log(this.loginFormData);
    }, 3000)
  }

  toast(mes, dura, type) {
    const toast = this.toastController.create({
      message: mes,
      duration: dura
    });
    return toast.present();
  }

}
