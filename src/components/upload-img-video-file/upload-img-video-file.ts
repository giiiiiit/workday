import { Component, Input, Injectable, Output,EventEmitter,} from '@angular/core';
import { ActionSheetController ,} from "ionic-angular";
import { NoticeService } from "./noticeService";
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera} from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

import { UploadModel } from './model'

@Injectable()
@Component({
  selector: 'upload-img-video-file',
  templateUrl: `upload-img-video-file.html`,
})

/* 组件使用说明
  功能：附件上传（包括附件压缩上传）
  入参说明:
          option：对象，上传相关信息配置
                其中：
                imgUrl:字符串类型，按钮样式图片Url，必填
                serverUrl: 字符串类型，服务器地址，必填
                type: 字符串枚举类型，上传类型：img为图片，video为视频，file为文件，必填
                source: 字符串枚举类型，上传方式，imgPicker为从相册上传，camera为通过摄像头拍照，selectSource为弹框选择上传方式非，必填
                opacity: 数字类型;上传图片清晰度，非必填，默认为50
                resultWidth: 数字类型 ;//上传图片的宽，非必填，默认为800
                resultHeight: 数字类型 ;//上传图片的高，非必填，默认为800
                    
          afterUpload：上传后的回调函数，其中参数为上传后服务器返回的结果
  返回值：服务器返回的上传结果，以参数的形式传入afterUpload函数中
  用例： <upload-img-video-file [option]="uploadImgFromCamera" (afterUpload)="afterUpload($event)
         "></upload-img-video-file>，
        其中uploadImgFromCamera如下：
          {
            imgUrl: 'assets/imgs/add@3x.png',
            serverUrl: 'http://192.168.4.95:8080/practice_server/filaAction.do',
            type: 'img',//上传类型：img/video/file
            source: 'camera',//imgPicker/camera/selectSource
            opacity: '100',//清晰度
            resultWidth: 700,//图片的宽
            resultHeight: 200//图片的高
          }
*/

export class uploadIimgVideoFileComponent {

 
  @Input() option: UploadModel;
  @Output() afterUpload = new EventEmitter(); 

 
  //上传图片-调用相机时传入的参数
   cameraOptImg:any = {
    quality: 50,
    destinationType: 1, // Camera.DestinationType.FILE_URI,
    sourceType: 1, // Camera.PictureSourceType.CAMERA,
    encodingType: 0, // Camera.EncodingType.JPEG,
    mediaType: 0, // Camera.MediaType.PICTURE,
    correctOrientation: true,
     width: 800,
     height: 800,
  };

  // 上传图片-调用相册时传入的参数
   imagePickerOptImg:any = {
    maximumImagesCount: 1,//选择一张图片
    destinationType: 1, // Camera.DestinationType.FILE_URI,
    width: 800,
    height: 800,
    mediaType: 0, 
    quality: 50,
    sourceType:0
  };

  // 上传视频-调用相册时传入的参数
   imagePickerOptVideo : any = {
    destinationType: 1, // Camera.DestinationType.FILE_URI,
    selectMode: 101, //101=picker image and video , 100=image , 102=video
    maxSelectCount: 40, //default 40 (Optional)
    maxSelectSize: 188743680, //188743680=180M (Optional)
    mediaType: 1,
    sourceType:0
  };


  constructor(private transfer: FileTransfer,private notiSer: NoticeService,
   private fileChooser: FileChooser, private actionSheetCtrl: ActionSheetController, private camera: Camera
  ) {
   
  }
  ngOnInit() {
  }
  
  // 启动拍照功能
   startCamera() {
     if (this.option.type =="img"){
       if (this.option.opacity != undefined) {
         this.cameraOptImg.opacity = this.option.opacity;
       }
       if (this.option.resultWidth != undefined) {
         this.cameraOptImg.width = this.option.resultWidth;
       }
       if (this.option.resultHeight != undefined) {
         this.cameraOptImg.height = this.option.resultHeight;
       }
      this.camera.getPicture(this.cameraOptImg).then((imageData) => {
        this.uploadContent(imageData);
      }, (err) => {
        this.notiSer.showToast('ERROR:' + err); //错误：无法使用拍照功能！
      });
     } else if (this.option.type == "video"){
       this.camera.getPicture(this.imagePickerOptVideo)
         .then((results) => {
           if (results != null) {
             this.uploadContent(results);
           }

         }, (err) => {
           this.notiSer.showToast('ERROR:' + err); //错误：无法从手机相册中选择图片！
         });
    }
  }

  // 打开手机相册
  private openImgPicker() {
    if (this.option.type == "img") {
      if (this.option.resultWidth!= undefined){
        this.cameraOptImg.width = this.option.resultWidth;
      }
      if (this.option.resultHeight != undefined) {
        this.cameraOptImg.height = this.option.resultHeight;
      }
      this.camera.getPicture(this.imagePickerOptImg)
        .then((results) => {
          if (results != null) {
            this.uploadContent(results);
          }
        }, (err) => {
          this.notiSer.showToast('ERROR:' + err); //错误：无法从手机相册中选择图片！
        });
    } else if (this.option.type == "video"){
      this.camera.getPicture(this.imagePickerOptVideo)
        .then((results) => {
          if (results != null) {
            this.uploadContent(results);
          }

        }, (err) => {
          this.notiSer.showToast('ERROR:' + err); //错误：无法从手机相册中选择图片！
        });
    }
   
  }

  // 使用ionic中的ActionSheet组件
  private useASComponent() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            this.startCamera();
          }
        },
        {
          text: '从手机相册选择',
          handler: () => {
            this.openImgPicker();
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }

  uploadImg(){
    if (this.option.source == 'selectSource'){
      this.useASComponent();
    } else if (this.option.source == 'camera') {
      this.startCamera();
    } else {
      this.openImgPicker();
    }   
  }
  uploadVideo() {
    if (this.option.source == 'selectSource') {
      this.openImgPicker();
    } else if (this.option.source == 'camera'){
      this.openImgPicker();
    }else{
      this.openImgPicker();
    }
  }
  uploadFile() {
    this.fileChooser.open()
      .then((results) => {
        this.uploadContent(results);

      }, (err) => {
        this.notiSer.showToast('ERROR:' + err); 
      })
      .catch(e => console.log(e));
  }



  //将图片、视频、文件上传到服务器
  uploadContent(path) {
    if (!path) {
      return;
    }
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'upload.jpg',
      headers: {}
    }

    fileTransfer.upload(path, this.option.serverUrl, options)
      .then((data) => {
        this.afterUpload.emit(data);
      }, (err) => {
        this.afterUpload.emit(err);
      })
  }

  
  

}
