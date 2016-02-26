import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/templates/heroes.tpl.html',
  styleUrls: ['app/styles/heroes.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  public heroes: Hero[];
  constructor(private _heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
