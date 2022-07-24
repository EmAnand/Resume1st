 import { Directive } from "@angular/core";
 import { AbstractControl,  NG_VALIDATORS, Validators } from "@angular/forms";

 @Directive({
     selector: '[passwordValidator]',
     providers: [{provide:NG_VALIDATORS,
     useExisting:CheckPasswordDirective,
 multi:true}]

 })

 export class CheckPasswordDirective implements Validators{
     validate(control: AbstractControl):{[key: string]:any}|null{
         return control.value?.length < 6 ? {'passwordError' : true}:null
     }
 }