import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { signpadOptionsValues } from './signpadOptionsValues.model';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/* 组件使用说明
  功能：签名手写板
  入参说明： signpadOptions：对象类型，手写板配置项，必填
            signpadOptionsValue:object = {
              tabOptions: {
                tabStatus: true, // 启动自定义画板，默认为true；PS：penColor和maxWidth配置无效
                arrayNumbers: [8.0, 6.0, 4.0, 2.0, 1.0], //画笔粗细 number类型 float
                arrayColors: ['#333', '#fff111', '#3366cc', '#666', '#ff9900'] //画笔颜色 string
              },
              minWidth: 1.0, // 笔锋 float
              maxWidth: 5.0, // 粗细 float
              throttle: 20, // default 16 每秒绘制的次数,越细腻 int
              canvasHeight: 325,
              penColor: '#eee', // 画笔颜色
              backgroundColor: '#fff' // 背景颜色
            }
  返回值：signImgUrl()  返回图片base64编码
  用例： <page-sample-signaturepad [signpadOptions]='signpadOptionsValue' (signImgUrl)="onsignImgUrl($event)"></page-sample-signaturepad>
*/
@Component({
  selector: 'page-sample-signaturepad',
  templateUrl: 'sample-signaturepad.html'
})
export class SampleSignaturepad {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild('contentEl') contentEl: ElementRef;
  imageData: String;
  arrayNumbers = [];
  arrayColors = [];
  isEmpty = true;
  conditionLeft = false;
  conditionRight = false;
  tabStatus: boolean;
  statusLeft = 0;
  statusRight = 0;
  public _signpadOptions: object;
  @Input()
  set signpadOptions(signpadOptionsValue: signpadOptionsValues){
    this._signpadOptions = signpadOptionsValue;
    this._signpadOptions['canvasWidth'] = this.contentEl.nativeElement.offsetWidth - 30;
    this.tabStatus = this._signpadOptions['tabStatus'];
    if (this._signpadOptions['tabOptions']['tabStatus']) {
      this.tabStatus = this._signpadOptions['tabOptions']['tabStatus'];
      this.arrayNumbers = this._signpadOptions['tabOptions']['arrayNumbers'];
      this.arrayColors = this._signpadOptions['tabOptions']['arrayColors'];
      this._signpadOptions['minWidth'] = this.arrayNumbers[0];
      this._signpadOptions['penColor'] = this.arrayColors[0];
    }
    for (let k in this._signpadOptions) {
      switch (k) {
        // case 'minWidth':
        //   if (!this._signpadOptions[k]) this._signpadOptions[k] = 0.5;
        //   if (this._signpadOptions[k] < 0.5) this._signpadOptions[k] = 0.5;
        //   if (this._signpadOptions[k] < 1.5) this._signpadOptions[k] = 1.5;
        //   break;
        // case 'maxWidth':
        //   if (!this._signpadOptions[k]) this._signpadOptions[k] = 2;
        //   if (this._signpadOptions[k] < 2) this._signpadOptions[k] = 2;
        //   if (this._signpadOptions[k] > 6) this._signpadOptions[k] = 6;
        //   break;
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  drawStart() {
  }
  choosetab(type) {
    if (type === 1) {
      this.conditionRight = false;
      if (this.conditionLeft === false) {
        this.conditionLeft = true;
      } else {
        this.conditionLeft = false;
      }
    } else {
      this.conditionLeft = false;
      if (this.conditionRight === false) {
        this.conditionRight = true;
      } else {
        this.conditionRight = false;
      }
    }
  }
  choosePen(type, index, item) {
    if (type === 1) {
      this.signaturePad.set('minWidth', item);
      this.statusLeft = index;
      this.conditionLeft = false;
    } else if (type === 2) {
      this.signaturePad.set('penColor', item);
      this.statusRight = index;
      this.conditionRight = false;
    }
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
