//  import { AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";
// import { Directive, Input } from "@angular/core";

// @Directive({
//     selector: '[registervalidator]',
//     providers: [
//         {provide: NG_VALIDATORS, useExisting: FirstNameDirective, multi:true}
//     ]
// })

// export class FirstNameDirective implements Validator
// {
// @Input('FirstNameDirective') nameNotAllow :  string ;

// validate(control: AbstractControl):{[key: string]:any} | null
// {
//     const nameNotAllow = new RegExp(this.nameNotAllow).test(control.value);

//     return nameNotAllow ? {'nameNotAllow' : true} : null;
// }

// }
// // @Directive({
// //     selector: '[registervalid]',
// //     providers: [
// //         { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
// //     ]
// // })