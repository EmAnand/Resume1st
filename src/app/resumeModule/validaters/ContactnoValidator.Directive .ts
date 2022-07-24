import { Directive } from "@angular/core";
import { AbstractControl,  NG_VALIDATORS, Validators } from "@angular/forms";

@Directive({
    selector: '[contactValidator]',
    providers: [{provide:NG_VALIDATORS,
    useExisting:CheckcontactDirective,
multi:true}]

})

export class CheckcontactDirective implements Validators{
    validate(control: AbstractControl):{[key: string]:any}|null{
       // console.log(control.value.toString().length != 10 ? {'contactError' : true}:null)
        return control.value.toString().length != 10 ? {'contactError' : true}:null
    }
}