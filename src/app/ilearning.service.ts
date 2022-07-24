import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { funcEncr } from './BL/modifier';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IlearningService {

  constructor(private http:HttpClient,private afs: AngularFirestore,private afStrorage:AngularFireStorage) { }

   exam(){
     console.log("this method is work")
     //return this.af.get();
   }
   getCertsDetail(){
     return this.afs.collection('CERT').valueChanges();
   }
   getMainCollectionValue(type:string){
    return this.afs.collection(type).valueChanges();
  }
  
   getQuesiton(certId:string,questionId:string){
    var userDoc = this.afs.doc(certId+'/'+questionId);
    return userDoc.valueChanges();
   }

   getCert(cert:string){
    var userDoc = this.afs.doc('CERT/'+cert);
    return userDoc.valueChanges();
   }

   getQnA(QnAId:string){
    var userDoc = this.afs.doc('QnA/'+QnAId);
    return userDoc.valueChanges();
   }
   getQnAData(keyId:string){
    var userDoc = this.afs.doc('QnA_Data/'+keyId);
    return userDoc.valueChanges();
   }

   getGuideData(cert:string){
    var guideData = this.afs.doc('CERT-GUIDE/'+cert);
    return guideData.valueChanges();
   }

   SubmitQnA(docId:string,f:any,dataCollection:any){
    return this.afs.collection('QnA_Data').add(f).then(newId=>{
      let id = funcEncr(newId.id,environment.EnKey);
      dataCollection.Key.push(f.NoOfQuestions.toString()+'#'+id);
      this.afs.collection('QnA').doc(docId).update(dataCollection);
      return "Successfully updated";
    }).catch(err => 'Got an error '+err);
   }

   SubmitCertNewQuestion(mainCollectionName:string,certId:string,f:any,cert:any){
   return this.afs.collection(certId).add(f).then(newId=>{
      let id = funcEncr(newId.id,environment.EnKey);
      let keysLen = cert.Keys.length;
      if(keysLen==0 || (keysLen==1 && cert.Keys[keysLen-1].toString().split('#').length>30) || (keysLen>1 && cert.Keys[keysLen-1].toString().split('#').length>=50)) 
        cert.Keys.push(id);
      else
        cert.Keys[keysLen-1]= !cert.Keys[keysLen-1] ? id : cert.Keys[keysLen-1] +'#'+id;
      
      this.afs.collection(mainCollectionName).doc(certId).update(cert);
      return "Successfully updated";
    }).catch(err => 'Got an error '+err);
   }

   getMainCollection(mainCollectionName:string){
     //this.afs.collection('dd').doc('asdf').;
     return this.afs.collection(mainCollectionName).get();
   }

   UploadBlog(f:any){
    console.log(f);
    return this.afs.collection('Blogs').add(f);
    }

  //  uploadPercent:number=0;
  //  downloadURL:any='';
  //  uploadFile(event:any) {
  //    console.log('uploading started!');
  //   const file = event.target.files[0];
  //   const filePath = 'Uploaded';
  //   const fileRef = this.afStrorage.ref(filePath);
  //   const task = this.afStrorage.upload(filePath, file);
  //   // observe percentage changes
  //   console.log(task.percentageChanges());
  //   // get notified when the download URL is available
  //   task.snapshotChanges().pipe(
  //       finalize(() => this.downloadURL = fileRef.getDownloadURL() )
  //    )
  //   .subscribe()
  // }
  
}
