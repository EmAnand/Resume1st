import { NgModule } from "@angular/core";
import { RouterModule, Routes, ROUTES } from "@angular/router";
import { IExperienceComponent } from "./i-experience/i-experience.component";
import { ILanguageComponent } from "./i-language/i-language.component";
import { IPersonalInfoComponent } from "./i-personal-info/i-personal-info.component";

import { IQualificationComponent } from "./i-qualification/i-qualification.component";
import { SimpleComponent } from "./simple/simple.component";

const routes: Routes=[
    {path:'language', component:ILanguageComponent},
    {path:'info', component:IPersonalInfoComponent},
    {path:'experience', component:IExperienceComponent},
    {path:'Qualification', component:IQualificationComponent},
    {path:'simple', component:SimpleComponent}
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ResumeRoutingModule{}