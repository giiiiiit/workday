import { Component, Input, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'pdf-reader',
  templateUrl: 'pdf-reader.html'
})
export class PDFReaderComponent {

  @Input() pdfSrc: string; 

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
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", event)
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
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      console.log("$$$$$$4",error);
    });



  }
}