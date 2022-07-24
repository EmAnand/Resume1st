import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeRoutingModule } from './resume-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
     
    SimpleComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    

  ]
})
export class ResumeModule { }
