import { Component } from '@angular/core';
import { HttpService, UserModel } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-protractor-http400-error';
  error: string = '';

  constructor(private httpService: HttpService){}

  register(){
    console.log('registering!');
    this.httpService.register().subscribe((user: UserModel) => {
      console.log('got user: ', user);
    }, (error) => {
      this.error='email already exists';
    });
  }
}
