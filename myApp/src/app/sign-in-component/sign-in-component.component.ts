import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent {

  signIn = {
    email:"nazmulhs030@gmail.com",
    pass : '01626100302nn'
  }

   searchText:string = "hi"


  onHandleChangeEmail(event:any){
    this.signIn.email=event.target.value

  }

  
  onHandleChangePass(event:any){
    this.signIn.pass=event.target.value

  }

}
