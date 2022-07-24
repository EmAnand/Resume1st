import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IlearningService } from 'src/app/ilearning.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  certs:any[]=[];
  vendor:string='all'
   constructor(private learning:IlearningService,private aRoute:ActivatedRoute) {
     
    }
 
   ngOnInit(): void {
     this.aRoute.params.subscribe((val:Params)=>{
       this.vendor = val['id']??'all';
       this.learning.getMainCollectionValue('TEST').subscribe(val=>{
         this.certs = val.filter((v:any)=> this.vendor=='all'? true:v.Vendor==this.vendor)
         console.log(this.certs)
       });
     });
     //console.log(this.vendor);
     // this.learning.getCertsDetail().subscribe(val=>{
     //   this.certs = val.filter((v:any)=> this.vendor=='all'? true:v.Vendor==this.vendor)
     //   console.log(this.certs)
     // });
     
   }
 
 }