import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-i-experience',
  templateUrl: './i-experience.component.html',
  styleUrls: ['./i-experience.component.css']
})
export class IExperienceComponent implements OnInit {

  experi:any| null=environment.data.Experiernce
edit:boolean=false;
 countryList:any | null=environment.DimensionData.Country.Data
  
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {

    console.log()
    
  }

  
  formsubmit(f:NgForm){

    console.log(f.value)
    this.edit=false;
  }
  editform(){
this.edit=true;    
  }
}
