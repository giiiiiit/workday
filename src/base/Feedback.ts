import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class Feedback {

    constructor(private toastCtrl: ToastController) {
    }

    public Toast(option) {
        let toast = this.toastCtrl.create({
            message: option.msg || '默认提示',
            duration: option.time || 3000,
            position: option.position || 'bottom'
        });
        return toast.present();
    }
}
