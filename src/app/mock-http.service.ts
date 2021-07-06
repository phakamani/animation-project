import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockHttpService {

  constructor(
    private http: HttpClient
  ) { }

  getMoreContent(): Observable<any> {
    return this.http.get('https://www.google.com').pipe(
      map(response => {
        return response
      }),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError('Server could not respond');
  }
}
