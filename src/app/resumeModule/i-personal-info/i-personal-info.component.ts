import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { iPersonalInfo } from '../models/resume';


@Component({
  selector: 'app-i-personal-info',
  templateUrl: './i-personal-info.component.html',
  styleUrls: ['./i-personal-info.component.css']
})
export class IPersonalInfoComponent implements OnInit {
d:any | null =environment.data.PersonalInfo
edit:boolean=false;	
countryList:any | null=environment.DimensionData.Country.Data
  constructor() {
	  
   }

  ngOnInit(): void {

	

  }

  formsubmit(f:NgForm){
	console.log(f.value)
	this.edit=false;
}
  editform(){
	  this.edit=true;

  }    

  }

