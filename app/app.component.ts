import { Component }       from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent} from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

import 'rxjs/Rx';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
  <a [routerLink]="['Heroes']">Heroes</a>
  <a [routerLink]="['Dashboard']">Dashboard</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService,
    HTTP_PROVIDERS
  ]    
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
])
export class AppComponent {
  title = 'Tour of Heroes';
  
}
