import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Userlogin } from '../interfaces/userlogin';
import { Router, NavigationExtras} from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

  export class SigninComponent implements OnInit {
    private myData:Userlogin={} as Userlogin;
    public loginForm!: FormGroup;

    constructor(public translateService: TranslateService,private fb: FormBuilder,public _ls:LoginService,private router: Router, private cookieService: CookieService) {
      translateService.addLangs(['Español','Ingles','Portugues']);
      translateService.setDefaultLang('Español');
    }



  ngOnInit(): void {
    this.loginForm=this.fb.group(
      {
        Usuario:['',[Validators.minLength(5),Validators.email,Validators.required]],
        Password:['',[Validators.required]]
      }
    )
  }

    translateSite(langauge: string) {
      this.translateService.use(langauge);
    }

    sendLogin(){
      const dataSend={
        'Usuario':this.loginForm.controls['Usuario'].value,
        'Password':this.loginForm.controls['Password'].value
      }
      this._ls.submitLogin(dataSend).subscribe((res:any) =>{
        console.log('Exitoso');
        this.cookieService.set('token_access',res.jwt,4,'/');
        this.router.navigate(['correct']);
      })
    }

  }
