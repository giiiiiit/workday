import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/*
  Generated class for the SampleSignaturepad page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
// @IonicPage()
@Component({
  selector: 'page-sample-signaturepad',
  templateUrl: 'sample-signaturepad.html'
})
export class SampleSignaturepad {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild('contentEl') contentEl: ElementRef;

  imageData: String;
  forNumber = [];
  isEmpty = true;
  conditionLeft = false;
  conditionright = false;
  statusLeft = 0;
  statusRight = 0;
  private _signpadOptions: object;

  @Input()
  set signpadOptions(signpadOptions: object){
    this._signpadOptions = signpadOptions
    for (let k in this._signpadOptions) {
      if (k !== 'canvasWidth') {
        this._signpadOptions['canvasWidth'] = this.contentEl.nativeElement.offsetWidth - 30;
      }
      switch (k) {
        case 'canvasWidth':
          this._signpadOptions[k] = this.contentEl.nativeElement.offsetWidth - 30;
          break;
        case 'minWidth':
          if (!this._signpadOptions[k]) this._signpadOptions[k] = 0.5;
          if (this._signpadOptions[k] < 0.5) this._signpadOptions[k] = 0.5;
          if (this._signpadOptions[k] < 1.5) this._signpadOptions[k] = 1.5;
          break;
        case 'maxWidth':
          if (!this._signpadOptions[k]) this._signpadOptions[k] = 2;
          if (this._signpadOptions[k] < 2) this._signpadOptions[k] = 2;
          if (this._signpadOptions[k] > 6) this._signpadOptions[k] = 6;
          break;
        case 'throttle':
          if (this._signpadOptions[k] > 20 || !this._signpadOptions[k]) this._signpadOptions[k] = 16;
          break;
      }
    }
  }

  get signaturePadOptions(): Object {
    return this._signpadOptions;
  };
  @Output() signImgUrl = new EventEmitter<String>();
  // private signaturePadOptions: Object = {
  //   'minWidth': 1.0, // 笔锋 float
  //   'maxWidth': 5.0, // 粗细 float
  //   'throttle': 20, // default 16 每秒绘制的次数,越细腻 int
  //   'canvasHeight': 200,
  //   'penColor': '#333', // 画笔颜色
  //   'backgroundColor': '#dfdfdf' // 背景颜色
  // };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 5; i++) {
      this.forNumber.push(this.forNumber.length)
    }
  }

  drawStart() {
    // console.log('begin drawing');
  }

  choosePen(index) {
    this.statusLeft = index
  }

  drawComplete() {
    this.isEmpty = true;
  }

  save() {
    this.imageData = this.signaturePad.toDataURL();
    this.signImgUrl.emit(this.imageData);
  }

  empty() {
    this.signaturePad.clear();
  }
}
