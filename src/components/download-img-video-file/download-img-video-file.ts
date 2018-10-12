import { Component, Input, Injectable, Output,EventEmitter,} from '@angular/core';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { downloadModel } from './model'

@Injectable()
@Component({
  selector: 'download-img-video-file',
  templateUrl: `download-img-video-file.html`,
})

/* 组件使用说明
  功能：附件上传（包括附件压缩上传）
  入参说明:
          option：对象，下载相关信息配置，其中：
                imgUrl:字符串类型，按钮样式图片Url，必填
                contentUrl: 字符串类型，要下载内容的地址，必填                    
          afterUpload：上传后的回调函数，其中参数为上传后服务器返回的结果，不必填
  返回值：服务器返回的下载结果，以参数的形式传入afterUpload函数中
  用例： <download-img-video-file [option]="downImgOption" 
          (afterUpload)="afterUpload$event) "></download-img-video-file>
，
*/

export class downloadIimgVideoFileComponent {

 
  @Input() option: downloadModel;
  @Output() afterDownload = new EventEmitter(); 

 


  constructor(private transfer: FileTransfer, private file: File) {
    
  }
  
  ngOnInit() {
  }
  

  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = this.option.contentUrl;
    fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
      this.afterDownload.emit(entry);
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      this.afterDownload.emit(error);
    });
  }

  
  

}
