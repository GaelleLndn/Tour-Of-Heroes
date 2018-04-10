import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero 

  onSelect(hero: Hero): void {
/* Perhaps the opposite in some ways to 'any' is 'void', the absence of having any type at all. 
   You may commonly see this as the return type of functions that do not return a value:
 */
    this.selectedHero = hero;
  }

  heroes = HEROES;
  
  constructor() { }

  ngOnInit() {
  }



}
