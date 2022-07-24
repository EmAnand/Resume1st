import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { CheckPasswordDirective } from './login/validaters/passwordValidators.Directive';
import { CheckcontactDirective } from './login/validaters/ContactnoValidator.Directive ';
import { CheckloginNameDirective } from './login/validaters/loginNameValidator.Directive';
import { TermconditionComponent } from './termcondition/termcondition.component';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    PasswordChangeComponent,
    CheckPasswordDirective,
    CheckcontactDirective,
    CheckloginNameDirective,
    TermconditionComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ]
})
export class LoginModule { }
