import {RouteParams} from 'angular2/router';
import { HeroService } from './hero.service';
import { Component, OnInit } from 'angular2/core';
import {Hero} from './hero';
@Component({
  selector: 'my-hero-detail',
  inputs:['hero'],
  templateUrl: 	'app/hero-detail.component.html',
  styleUrls:['app/hero-detail.component.css']
})
export class HeroDetailComponent {
	constructor(
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}	
	hero: Hero;
    errorMessage:String;
	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._heroService.getHeroes()
                     .subscribe(
            heroes => this.hero = heroes.find(myObj => myObj.id == id),
                       error =>  this.errorMessage = <any>error);
			
	}
	goBack() {
		window.history.back();
	}
}