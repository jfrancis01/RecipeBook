import { Component } from "@angular/core";
import { Form, NgForm } from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ["./auth.component.css"]
})

export class AuthComponent{
  isLoggedIn = true;

  onSwitchmode(){
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm){
    console.log(form);
    form.reset;
  }
}