import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

import { DefaultComponent } from 'src/app/pages/default/default.component';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  username !: any;
  disabled : boolean = false
  items!: MenuItem[];
  practicas: any;
  practicaGlobal : any;
  constructor(public appDefault : DefaultComponent) { }

  ngOnInit(): void {
    
  }

  
}
