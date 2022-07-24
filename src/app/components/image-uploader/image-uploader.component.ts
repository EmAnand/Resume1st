import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { generateUUID } from 'src/app/BL/modifier';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {
@Input() displayOnlySrc:any='false';
  constructor(private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  
  // uploadFile(event: any) {
  //   this.learning.uploadFile(event);
  // }

  SaveFiles(event: any) {
    this.file = event.target.files[0];
  }
  file: any;
  uploadPercent: Observable<number | undefined> | null = null;
  downloadURL: Observable<string> | null = null;
  uploadFiles() {
    if (!!this.file) {
      
      const filePath = environment.ImageUploadedLocation+'/'+generateUUID();
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);

      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL())
      )
        .subscribe()
      this.file = null;
    }
    else{
      alert('file is not exists')
    }
  }

  CopyClipboard(){
    var copyText = (<HTMLInputElement>document.getElementById('imgToCopy')).value;
    //copyText.select();
    //copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: ");
  }

}
