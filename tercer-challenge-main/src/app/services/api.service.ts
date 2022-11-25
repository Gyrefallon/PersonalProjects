import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {


  constructor(private http: HttpClient) {
    console.log("servicio HTTP:")
  }
  URI = 'https://codigo-alfa.cl/Boot/'


  public getUserList = (): Observable<any> => {
    const getUserUri = this.URI + 'getListCandidatos';
    return this.http.get(getUserUri);
  };
  public getDataForm = (): Observable<any> => {
    const getformUri = this.URI + 'getCommon';
    return this.http.get(getformUri);
  };

  addNewUser(){

  }
}


