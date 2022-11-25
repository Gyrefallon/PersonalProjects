import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Userlogin } from '../interfaces/userlogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient, ) {}

  URI = 'https://codigo-alfa.cl/Api/validaUserBootcamp'

  submitLogin(user: any): Observable<any> {
    const params = {
      "email" : user.Usuario,
      "password" : user.Password,
    };
    return this._http.post(this.URI, params)
  }

}
