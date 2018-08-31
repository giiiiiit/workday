import { Component, Input, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'pdf-reader',
  templateUrl: 'pdf-reader.html'
})
/* 组件使用说明
  功能：pdf文档阅读器
  入参说明：pdfSrc：字符串类型，文件地址，必填
           watermark：boolean型，是否加水印，默认不加，非必填
           watermarkType：字符串枚举类型，水印类型，watermark为true，则必填，text:文字类型水印，img：图片类型水印
           watermarkTextOrUrl：字符串类型，如果水印是文字，则为文字内容，如果水印类型是图片，则为图片Url，watermark为true，则必填
  返回值：无
  用例： <pdf-reader [pdfSrc]="pdfSrc" [watermark]="true" 
          [watermarkType]="'text'" [watermarkTextOrUrl]="'sunfield'"></pdf-reader>
*/
export class PDFReaderComponent {

  @Input() pdfSrc: string; 
  @Input() watermark: boolean;
  @Input() watermarkType: string;
  @Input() watermarkTextOrUrl: string;

  pdfSrc2 = "";
  keyword = "";
  loader = true;
  constructor(private transfer: FileTransfer,
    private file: File,) {
 
  }
 
  ngOnInit() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.pdfSrc, true);
    xhr.responseType = 'blob';

    xhr.onload = (e: any) => {
      console.log(xhr);
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: 'application/pdf' });
        this.pdfSrc2 = URL.createObjectURL(blob);
      }
    };
    xhr.send();
  }
  complete(event){
    this.loader = false;
  }
 
  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;
  search(keyword: string) {    
    this.pdfComponent.pdfFindController.executeCommand('find', {
      caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: keyword
    });
  }
  
  download() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = encodeURI(this.pdfSrc);
    fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
    }, (error) => {
    });



  }
}