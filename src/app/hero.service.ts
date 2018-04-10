import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';




/*  TIP °°° Services °°°
    Services are a great way to share information among classes that don't know each other. 
    You'll create a MessageService and inject it in two places:

    in HeroService which uses the service to send a message.
    in MessagesComponent which displays that message.
 */

 /*  The @Injectable() decorator tells Angular that this service might itself have injected dependencies. 
    It doesn't have dependencies now but it will soon. 
    Whether it does or it doesn't, it's good practice to keep the decorator.
 */

@Injectable()

export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
    /* this method returns ** mock-heroes **  */
  }

}
