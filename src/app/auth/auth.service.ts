import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";


interface AuthResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localid: string
}

@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http: HttpClient){

    }

    signup(email: string, password: string){
        return this.http.post<AuthResponseData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyvAzDPGx-M5-GNdJw5GvNPRG_h3nhDB8", {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(errorRes => {
            let errorMessage = 'An unknown error occured!';
            if(errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);
            }
            switch(errorRes.error.error.message){
                case 'EMAI_EXISTS':
                    errorMessage= 'This email already exists';
            }
            return throwError(errorMessage)
        }));
    }
}