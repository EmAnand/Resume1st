import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IlearningService } from 'src/app/ilearning.service';

@Component({
  selector: 'app-qnas',
  templateUrl: './qnas.component.html',
  styleUrls: ['./qnas.component.css']
})
export class QnasComponent implements OnInit {
  certs:any[]=[];
  vendor:string='all'
   constructor(private learning:IlearningService,private aRoute:ActivatedRoute) {
     
    }
 
   ngOnInit(): void {
     this.aRoute.params.subscribe((val:Params)=>{
       this.vendor = val['id']??'all';
       this.learning.getMainCollectionValue('QnA').subscribe(val=>{
         this.certs = val.filter((v:any)=> this.vendor=='all'? true:v.Vendor==this.vendor)
       });
     });
     //console.log(this.vendor);
     // this.learning.getCertsDetail().subscribe(val=>{
     //   this.certs = val.filter((v:any)=> this.vendor=='all'? true:v.Vendor==this.vendor)
     //   console.log(this.certs)
     // });
     
   }
 
 }