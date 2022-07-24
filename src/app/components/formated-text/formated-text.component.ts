import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/login/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-formated-text',
  templateUrl: './formated-text.component.html',
  styleUrls: ['./formated-text.component.css']
})
export class FormatedTextComponent implements OnInit {
  ImageUploader: boolean = false;
  formatedText:string|null=null;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  Submit(f: NgForm) {
    this.formatedText = f.value.blog
  }
  displayImageUploader() {
    this.ImageUploader = !this.ImageUploader;
  }
  get isAdmin():boolean{
    return environment.AdminEmails.includes(this.loginService.user.email);
  }
}
