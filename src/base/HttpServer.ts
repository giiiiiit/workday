import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { StorageService } from '../base/StorageService';
import { ToastController } from 'ionic-angular';
import { TOKEN } from '../base/Constants';

@Injectable()
export class HttpServer {

  /*
  * 通讯常量
  * */

  private APP_STATUS_SUCCESS:string='success';

  constructor(private toastCtrl: ToastController,private http: Http,private storageService:StorageService) {
  }

  public get(url: string, paramObj: any) {
    console.log(url + this.toQueryString(paramObj));
    return this.http.get(url + this.toQueryString(paramObj))
      .toPromise()
      .then(res => this.handleSuccess(res.json()))
      .catch(error => this.handleError(error));
  }


  public post(url: string, paramObj: JSON, type: number, key: string) {
    // let headers = new Headers({'Content-Type': 'application/json'});
    // if (type === 3) {
    //   this.storageService.write(key, paramObj);
    //   return
    // }
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(url, this.toBodyString(paramObj), new RequestOptions({headers: headers}))
      .toPromise()
      .then(res => this.handleSuccess(res.json()))
      .catch(error => this.handleError(error));
  }

  public postBody(url: string, paramObj: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    // let headers = new Headers({'Content-Type': ' Access-Control-Allow-Origin'});
    return this.http.post(url, paramObj, new RequestOptions({headers: headers}))
      .toPromise()
      .then(res => this.handleSuccess(res.json()))
      .catch(error => this.handleError(error));
  }

  // 拦截器
  private handleSuccess(result) {
    if(result.status!=this.APP_STATUS_SUCCESS){
      //请求成功
      // alert(result.msg);
    }
    // if (result && !result.success) {//由于和后台约定好,所有请求均返回一个包含success,msg,data三个属性的对象,所以这里可以这样处理
    //   alert(result.msg);//这里使用ToastController
    // }
    return result;
  }

  private handleError(error: Response | any) {
    let msg = '请求失败';
    if (error.status == 0) {
      msg = '请求地址错误';
    }
    if (error.status == 400) {
      msg = '请求无效';
      console.log('请检查参数类型是否匹配');
    }
    if (error.status == 404) {
      msg = '请求资源不存在';
      console.error(msg+'，请检查路径是否正确');
    }
    console.log(error);
    this.presentToast(msg);
    return {success: false, msg: msg};
  }

  presentToast(str) {
    let toast = this.toastCtrl.create({
      message: str,
      duration: 3000,
      position:'middle'
    });
    toast.present();
  }

  

  /**
   * @param obj　参数对象
   * @return {string}　参数字符串
   * @example
   *  声明: var obj= {'name':'小军',age:23};
   *  调用: toQueryString(obj);
   *  返回: "?name=%E5%B0%8F%E5%86%9B&age=23"
   */
  private toQueryString(obj) {
    let ret = [];
    for (let key in obj) {
      key = encodeURIComponent(key);
      let values = obj[key];
      if (values && values.constructor == Array) {//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(this.toQueryPair(key, values));
      }
    }
    ret.push(this.toQueryPair('Token', this.storageService.read(TOKEN)));
    console.log("Token", this.storageService.read(TOKEN));
    return '?' + ret.join('&');
  }

  /**
   *
   * @param obj
   * @return {string}
   *  声明: var obj= {'name':'小军',age:23};
   *  调用: toQueryString(obj);
   *  返回: "name=%E5%B0%8F%E5%86%9B&age=23"
   */
  private toBodyString(obj) {
    let ret = [];
    for (let key in obj) {
      key = encodeURIComponent(key);
      let values = obj[key];
      if (values && values.constructor == Array) {//数组
        let queryValues = [];
        for (let i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(this.toQueryPair(key, value));
        }
        ret = ret.concat(queryValues);
      } else { //字符串
        ret.push(this.toQueryPair(key, values));
      }
    }
    // ret.push(this.toQueryPair('userId',this.storageService.read(USERID)));
    ret.push(this.toQueryPair('token', this.storageService.read(TOKEN)));
    return ret.join('&');
  }

  private toQueryPair(key, value) {
    if (typeof value == 'undefined') {
      return key;
    }
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }
}
