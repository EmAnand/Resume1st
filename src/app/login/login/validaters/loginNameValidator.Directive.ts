 import { Directive } from "@angular/core";
 import { AbstractControl,  NG_VALIDATORS, Validators } from "@angular/forms";

 @Directive({
     selector: '[loginNameValidator]',
     providers: [{provide:NG_VALIDATORS,
     useExisting:CheckloginNameDirective,
 multi:true}]

 })

 export class CheckloginNameDirective implements Validators{
     validate(control: AbstractControl):{[key: string]:any}|null{
         return ((control.value?.length == 10 && !isNaN(control.value) )||  validateEmail(control.value) != null)? null: {'passwordError' : true};
         
     }
    };

     let validateEmail = (email:any)=> {
      return String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
 