import { Component } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ["./auth.component.css"]
})

export class AuthComponent{
  isLoggedIn = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService){

  }

  onSwitchmode(){
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm){
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    
    if(this.isLoggedIn){
     authObs =this.authService.login(email, password);
    }
    else{
     authObs =  this.authService.signup(email, password);
    }

    authObs.subscribe(
      responseData =>{
        this.isLoading = false;
        console.log(responseData);
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.error = 'An error occured';
      }
    );

    form.reset();
  }
}