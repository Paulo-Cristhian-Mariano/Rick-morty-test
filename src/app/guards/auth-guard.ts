import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  private title: any;

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean>| boolean{
    this.title = route.data['title']
    if(true){
      return true
    }
    else{
      return false
    }
  }
}
