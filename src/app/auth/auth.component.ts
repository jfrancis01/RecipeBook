import { Component } from "@angular/core";
import { Form, NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

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
    this.isLoading = true;
    
    if(this.isLoggedIn){
      //...
    }
    else{
      this.authService.signup(email, password).subscribe(
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
    }

    form.reset();
  }
}