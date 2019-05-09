import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked,
         OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
          <app-ng-style></app-ng-style>

          <app-css></app-css>

          <p>
            hola mundo desde app.component
          </p>

          <app-classes></app-classes>

          <p [appResaltado]="'pink'">
            Hola Mundo
          </p>

          <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked,
         OnDestroy {

  constructor() {
    console.log("constructor");
  }

  ngOnInit(){
    console.log("ngOnInit");
  }

  ngOnChanges(){
    console.log("ngOnChanges");
  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }


}
