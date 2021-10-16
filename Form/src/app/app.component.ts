import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  @ViewChild("f") signUpForm: NgForm;
  test = ''
  defaultQuestion = "pet";
  answer = ""
  genders = ["Male", "Female", "Other"];
  length = 10;
  submitted = false;
  user = {
    username: '',
    password: '',
    email: '',
    phone: '',
    secretQuestion: '',
    answer: '',
    gender: '',
    job: '',
    desc: '',
    salary: '',
  }

  random(length: number) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

  suggestUserName() {
    const suggestedName = this.random(10);
    this.signUpForm.form.patchValue({
      username_pass: {
        username: suggestedName
      }
    })
  }

  onSubmit(){
    this.submitted = true;  
    this.user.username = this.signUpForm.value.username_pass.username;
    this.user.password = this.signUpForm.value.username_pass.password;
    this.user.email = this.signUpForm.value.email_phone.email;
    this.user.phone = this.signUpForm.value.email_phone.phone;
    this.user.secretQuestion = this.signUpForm.value.secret_answer_gender.secret;
    this.user.answer = this.signUpForm.value.secret_answer_gender.answer;
    this.user.gender = this.signUpForm.value.secret_answer_gender.gender;
    this.user.job = this.signUpForm.value.job_desc_sal.jobDesc;
    this.user.desc = this.signUpForm.value.job_desc_sal.jobDesc;
    this.user.salary = this.signUpForm.value.job_desc_sal.salary;

    this.signUpForm.reset();
  }
}

