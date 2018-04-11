import { Component, OnInit, Input } from '@angular/core';

import  { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
/*   TIP °°° @Input °°°
  The hero property must be an Input property, annotated with the @Input() decorator, 
  because the external HeroesComponent will bind to it like this: 

  <app-hero-detail [hero]="selectedHero"></app-hero-detail>


  This component simply receives a hero object through its hero property and displays it.

 */
  constructor( 
    private route: ActivatedRoute,
    private heroService: HeroService, 
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back()
  }

}
