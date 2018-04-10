import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  constructor( private heroService: HeroService) { }
  /*  The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
      When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter 
      to the singleton instance of HeroService.  
   */

  ngOnInit() {
    this.getHeroes();
  }

  heroes: Hero []

  selectedHero: Hero 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 /* TIP °°° Void °°°
    Perhaps the opposite in some ways to 'any' is 'void', the absence of having any type at all. 
    You may commonly see this as the return type of functions that do not return a value:
 */

 getHeroes(): void {
  /* la methode pour recevoir la liste des heroes avant les observable: */
  /*this.heroes = this.heroService.getHeroes() */

  /* methode avec le observables: */

  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


/*   Observable.subscribe() is the critical difference.
    The previous version assigns an array of heroes to the component's heroes property. 
    The assignment occurs synchronously, as if the server could return heroes instantly 
    or the browser could freeze the UI while it waited for the server's response.
    That won't work when the HeroService is actually making requests of a remote server.
    The new version waits for the Observable to emit the array of heroes
    — which could happen now or several minutes from now. 
    Then subscribe passes the emitted array to the callback, which sets the component's heroes property.
    This asynchronous approach will work when the HeroService requests heroes from the server.
*/


}
