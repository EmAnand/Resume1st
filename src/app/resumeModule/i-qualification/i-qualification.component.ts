import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { iQualification } from '../models/resume';

@Component({
  selector: 'app-i-qualification',
  templateUrl: './i-qualification.component.html',
  styleUrls: ['./i-qualification.component.css']
})
export class IQualificationComponent implements OnInit {
ab:any | null=environment.data.Qualification
edit:boolean=false;
countryList:any | null= environment.DimensionData.Country.Data
	qualification:iQualification={
  Study:null,
	StudyTitle:null,
	InstitutionUrl:null,
	InstitutionName:null,
	Country:null ,
	City:null,
	Province:null,
	ZipCode:null,
	StudyFrom: new Date(2022,2,10) ,
	StudyTo:new Date(10,6,2016) ,
	StillOn:false ,
	HideFromCV:false ,
	Stream:null ,

}
  constructor() { }

  ngOnInit(): void {
  }

  formsubmit(f:NgForm){

    console.log(f.value)
    this.edit=false
  }
  editform(){
	  this.edit=true;
  }
}
