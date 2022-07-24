import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentCertComponent } from './components/cert/parent-cert/parent-cert.component';
import { CertsComponent } from './components/cert/certs/certs.component';
import { HomeComponent } from './home/home.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PracticeTestComponent } from './practice-test/practice-test.component';
import { StatementQuestionComponent } from './components/cert/statement-question/statement-question.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { ProfileComponent } from './profile/profile.component';
import { NewComponent } from './new/new.component';
import { SaveGuard } from './save.guard';
import { ParentQnAComponent } from './components/qna/parent-qn-a/parent-qn-a.component';
import { TestsComponent } from './components/test/tests/tests.component';
import { ParentTestComponent } from './components/test/parent-test/parent-test.component';
import { QnasComponent } from './components/qna/qnas/qnas.component';
import { TermsComponent } from './components/others/terms/terms.component';
import { FeaturesComponent } from './components/others/features/features.component';
import { WriteComponent } from './components/write/write.component';
import { FormatedTextComponent } from './components/formated-text/formated-text.component';
import { AdminGuard } from './admin.guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  
  
  {path:'contact', component:ContactComponent},
  {path:'formatedText', component:FormatedTextComponent,canActivate: [AdminGuard]},
  
  {path:'about', component:AboutComponent},
  {path:'my-home',component:HomeComponent},
  {path:'home', component:HomeComponent},
  
  
{path: 'certs/:id',component: CertsComponent}, 
{path: "cert/:id/:desc", component: ParentCertComponent},
{path:"interview-question-answers",component:InterviewsComponent},
{path:"practice-test",component:PracticeTestComponent},
{path:"new",component:NewComponent,canActivate: [AdminGuard]},
{path:"qans/:id",component:QnasComponent},
{path:"qna/:id/:desc",component:ParentQnAComponent},
{path:"tests/:id",component:TestsComponent},
{path:"terms",component:TermsComponent},
{path:"write",component:WriteComponent ,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
{path:"feature",component:FeaturesComponent},
{path:"test/:id/:desc",component:ParentTestComponent},
{path:"profile",component:ProfileComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
//{path:"exam", component:StatementQuestionComponent},
  //{path: 'items', loadChildren: () => import('../').then(m => m.ItemsModule)},
  //{path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin }},
  {path:'', component:HomeComponent},
  {path:'**', component:NotFoundComponent},


  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
