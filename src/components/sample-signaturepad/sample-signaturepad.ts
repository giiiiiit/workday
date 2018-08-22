import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { signpadOptionsValues } from './signpadOptionsValues.model';
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
    // console.log('begin drawing');
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
