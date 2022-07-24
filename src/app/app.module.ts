import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentCertComponent } from './components/cert/parent-cert/parent-cert.component';
import { CertsComponent } from './components/cert/certs/certs.component';
import { OptionalQuestionComponent } from './components/cert/optional-question/optional-question.component';
import { StatementQuestionComponent } from './components/cert/statement-question/statement-question.component';
import { KeyvalueQuestionComponent } from './keyvalue-question/keyvalue-question.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { PracticeTestComponent } from './practice-test/practice-test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NewComponent } from './new/new.component';
import { ParentQnAComponent } from './components/qna/parent-qn-a/parent-qn-a.component';
import { TestsComponent } from './components/test/tests/tests.component';
import { ParentTestComponent } from './components/test/parent-test/parent-test.component';
import { QnasComponent } from './components/qna/qnas/qnas.component';
import { TermsComponent } from './components/others/terms/terms.component';
import { FeaturesComponent } from './components/others/features/features.component';
import { WriteComponent } from './components/write/write.component';
import { BlogsComponent } from './components/blog/blogs/blogs.component';
import { BlogComponent } from './components/blog/blog/blog.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {RecaptchaModule} from 'ng-recaptcha'
import { EditorModule } from '@tinymce/tinymce-angular';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { blog } from './components/models/blog';
import { FormatedTextComponent } from './components/formated-text/formated-text.component';
import { ResumeModule } from './resumeModule/resume.module';
import { IPersonalInfoComponent } from './resumeModule/i-personal-info/i-personal-info.component';
import { ILanguageComponent } from './resumeModule/i-language/i-language.component';
import { IExperienceComponent } from './resumeModule/i-experience/i-experience.component';
import { IQualificationComponent } from './resumeModule/i-qualification/i-qualification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    ParentCertComponent,
    CertsComponent,
    OptionalQuestionComponent,
    StatementQuestionComponent,
    KeyvalueQuestionComponent,
    InterviewsComponent,
    PracticeTestComponent,
    NotFoundComponent,
    DashboardComponent,
    ProfileComponent,
    NewComponent,
    ParentQnAComponent,
    TestsComponent,
    ParentTestComponent,
    QnasComponent,
    TermsComponent,
    FeaturesComponent,
    WriteComponent,
    BlogsComponent,
    BlogComponent,
    ImageUploaderComponent,
    FormatedTextComponent,
    IPersonalInfoComponent,
    ILanguageComponent,
    IExperienceComponent,
    IQualificationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LoginModule,
    BrowserAnimationsModule, 
    SimpleNotificationsModule.forRoot(),
    AngularFireStorageModule,
    RecaptchaModule,
    EditorModule,
    ResumeModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
