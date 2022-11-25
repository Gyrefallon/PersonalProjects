import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-material';

  res = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUserList().subscribe({
      next: (data) => {
        this.res = data.response;
      },
      complete: () => {
        console.log(this.res);
      },
    });
  }
}
