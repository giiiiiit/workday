import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { UsernameValidator } from '../../validators/username.validator';
import { PasswordValidator } from '../../validators/password.validator';
@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})

export class FormPage {
  validations_form: FormGroup;
  matching_passwords_group: FormGroup;
  showErrorMes: boolean = true;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) { }
  ionViewWillLoad() {
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });
    this.validations_form = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      name: new FormControl('', Validators.required),
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }
  validation_messages = {
    'username': [
      { type: 'required', message: '用户名不能为空' },
      { type: 'minlength', message: '用户名最小长度为5' },
      { type: 'maxlength', message: '用户名最大长度为25' },
      { type: 'pattern', message: '用户名必须只包含数字和字母' },
      { type: 'validUsername', message: '你的用户名已经被注册' }
    ],
    'name': [
      { type: 'required', message: '昵称不能为空.' }
    ],
    'password': [
      { type: 'required', message: '密码不能为空' },
      { type: 'minlength', message: '密码必须至少有5个字符长' },
      { type: 'pattern', message: '您的密码必须至少包含一个大写字母、一个小写字母和一个数字' }
    ],
    'confirm_password': [
      { type: 'required', message: '需要确认密码' }
    ],
    'matching_passwords': [
      { type: 'areEqual', message: '两次密码不一致' }
    ],
    'terms': [
      { type: 'pattern', message: '你必须接受条款和条件' }
    ],
  };

  onSubmit(values){
    if (this.showErrorMes) {
      this.showErrorMes = false;
    }
    // this.navCtrl.push(SettingPage);
    console.log(values)
  }

}
