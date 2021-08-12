import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, switchMap, finalize, tap } from 'rxjs/operators';


export interface UserModel  {
  fullName: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }


  register(): Observable<UserModel> {
    let user: UserModel = {
      fullName: 'test3',
      email: 'test3@gmail.com',
      password: '123456',
    }
    console.log("registering service call");
    return this.http.post<UserModel>('http://events-api-9053.herokuapp.com/users/register', user);
    // return this.http.post<UserModel>('http://localhost:3000/users/register', user).pipe(
    //   catchError((error: HttpErrorResponse) => {

    //     return of(undefined);
    //   })
    // );
  }

}
