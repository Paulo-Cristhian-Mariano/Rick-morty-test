import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultsService<T> {

  constructor(
    private _http: HttpClient,
    private _snackBar: MatSnackBar,
  ) { }

  get(local: string): Observable<T> {
    return this._http.get<T>(environment.urlApi + local)
  }

  getPages(local: string): Observable<T> {
    return this._http.get<T>(local)
  }
}
