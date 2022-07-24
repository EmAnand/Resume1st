import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IlearningService } from '../../../ilearning.service';

@Component({
  selector: 'app-certs',
  templateUrl: './certs.component.html',
  styleUrls: ['./certs.component.css']
})
export class CertsComponent implements OnInit {
 certs:any[]=[];
 vendor:string='all'
  constructor(private learning:IlearningService,private aRoute:ActivatedRoute) {
    console.log('test test')
   }

  ngOnInit(): void {
    this.aRoute.params.subscribe((val:Params)=>{
      this.vendor = val['id']??'all';
      this.learning.getCertsDetail().subscribe(val=>{
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
