import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Challenge2';
  constructor(public translate: TranslateService){
    this.translate.addLangs(['Español', 'Portugues', 'Ingles'])
    this.translate.setDefaultLang('Español');
  }
  TranslateSite(language: string){
    this.translate.use(language);
  }
}
