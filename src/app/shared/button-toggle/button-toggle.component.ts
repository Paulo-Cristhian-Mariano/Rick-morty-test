import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { Observable, delay } from 'rxjs';

@Component({
  selector: 'app-button-toggle',
  standalone: false,
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss'
})
export class ButtonToggleComponent{
  constructor(private router: Router) { 
    router.events.subscribe((val: any) => {
        this.urlAtual = val['url']
    });
  }


  public urlAtual: string = '/inicio'
  changeUrlAtual(param: string) {
      this.router.navigate([`/${param}`]);
      this.urlAtual = '/'+param
  }

}
