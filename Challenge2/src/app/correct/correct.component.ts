import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-correct',
  templateUrl: './correct.component.html',
  styleUrls: ['./correct.component.css']
})
export class CorrectComponent implements OnInit {
  tokenInfo = this.getDecodedAccessToken(this.cookieService.get("token_access"));
  cookie2= this.cookieService.get("token_access")
  nombre = this.tokenInfo.data.name;




  constructor(public translateService: TranslateService,private cookieService: CookieService) {
    translateService.addLangs(['Español','Ingles','Portugues']);
    translateService.setDefaultLang('Español');
  }
  translateSite(langauge: string) {
    this.translateService.use(langauge);
  }


  getDecodedAccessToken(cookie: string): any {
    try {
      return jwt_decode(cookie);
    } catch(Error) {
      return null;
    }
  }

  ngOnInit(): void {

  const tokenInfo = this.getDecodedAccessToken(this.cookieService.get("token_access")); // decode token
  console.log(tokenInfo); // show decoded token object in console

  }


}
