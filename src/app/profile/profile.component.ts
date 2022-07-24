import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { error } from 'console';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  edit:boolean=false;
  image:string|undefined=undefined;
  user:any;

  constructor(private login:LoginService,private storage: AngularFireStorage,private notificationService:NotificationsService) { }

  ngOnInit(): void {
    this.user=this.login.user
    if(this.user.photoURL.length<10){
      this.user.photoURL=environment.FakeUserImage;
    }
  }
  file:any;
  SaveFiles(event:any){
    this.file = event.target.files[0];
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        //this.message = "Only images are supported.";
        return;
    }

    const reader = new FileReader();
    //this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.image = reader.result?.toString(); 
    }
  }

  ToEdit(){
    this.edit=true;
  }

  formsubmit(f:NgForm){
    if (f.valid) {
      // if (f.valid && !!f.value.files) {
      if(this.image){
      var downloadURL:any;
      const filePath = 'UserImage/'+this.user.uid;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.file);
      task.snapshotChanges().pipe(
        () => downloadURL = fileRef.getDownloadURL())
        .subscribe(val=>{
          this.uploadImage(f.value.name,val)
      })
     }
     else{
      this.uploadImage(f.value.name,null)
     }
    }
  }

  uploadImage(name:string|null,url:string|null){
    this.login.updateUserInfo(name,url).then((val:any)=>{
      this.notificationService.success('Success', 'Detail has been updated successfully',{
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 10
      });
      this.edit=false;
      },
      error=>{
        this.notificationService.error('Failed', 'Some error has been occured!',{
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: false,
          clickToClose: false,
          maxLength: 10
        });
      }
  )
  }
}
