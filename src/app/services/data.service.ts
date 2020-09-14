import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getPosts() {
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    // tap se desencadena cada vez que recibimos informacion del observable pero no produce efectos secundarios ni alteraciones
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      // .pipe(tap(posts => console.log(posts)));
      .pipe(tap(console.log));
    }
}
