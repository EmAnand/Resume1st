import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, RequiredValidator, Validators} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { iLanguage } from '../models/resume';
import { ResumeService } from '../resume.service';

@Component({
  selector: 'app-i-language',
  templateUrl: './i-language.component.html',
  styleUrls: ['./i-language.component.css']
})
export class ILanguageComponent implements OnInit {
  edit:boolean=false;
  starWidth: number = 0;
  openform:any
  rateProduct(event: any) {
    //this.starWidth = rateValue * 75 / 5;
    this.starWidth= event.target.id 
    console.log(event.target.id)
    event.target.style.color="yellow"
  }
  Country:any
  DimensionData:any
//  count:any |null= DimensionData.
  item:any | null= environment.data.Language
  lang:any | null = environment.DimensionData.Language.Data
  list:any | null = environment.DimensionData.Listening.Data
  Read:any | null = environment.DimensionData.Reading.Data
  sprek: any | null= environment.DimensionData.Speaking.Data
  Write: any | null = environment.DimensionData.Writing.Data
  abc:iLanguage={

  LanguageName:null,
  Listening: 0,
  Reading:0,
  Speaking:0,
  Writing:0,
  IsMotherTongue:false,

}
languageForm=  new FormGroup({
  IsMotherTongue : new FormControl(),
  LanguageName : new FormControl(),
  Listening : new FormControl(),
  Reading: new FormControl(),
  Speaking: new FormControl(),
  Writing: new FormControl(),

  'skills':new FormArray([
    new FormControl(),
    new FormControl(),
    new FormControl()
  ])

})
  constructor(private _formBuilder: FormBuilder) {
    
   
  }

  ngOnInit(): void {
  
    const Skills= new FormArray([
      new FormControl(null,Validators.required),
      new FormControl(null,Validators.required),
      new FormControl(null,Validators.required),
    ]);
   
    

  
  }

  formsubmit(){

    // this.abc=f.value;
    this.edit=false

    console.log("abc - ",this.abc)
    //console.log(f.value)
  // this.abc={
  //   LanguageName:f.value.LanguageName,
  // }
  // this.abc={
  //   LanguageName:f.value.LanguageName,
  //   Writing:f.value.Writing,
  //   Reading:f.value.Reading,
  //   Speaking:f.value.Speaking,
  //   Listening:f.value.Listening,
  //   IsMotherTongue:f.value.IsMotherTongue
  // }
  
  }
  editform(){
    this.edit=true;
    
  }

  onSubmit(){
    console.log(this.languageForm)
    this.edit=false;
  }
  onaddskill(){
    (<FormArray>this.languageForm.get('skills')).push(new FormControl(null))
    
  }
}
