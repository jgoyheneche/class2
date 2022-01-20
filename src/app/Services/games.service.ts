import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  constructor() { }

  private items:any[] = [
    {
      name:'GTA',
      description:'Juego de aventuras',
      plataform:'Todas las plataformas'
    },
    {
      name:'GTA 2',
      description:'Juego de aventuras 2',
      plataform:'Todas las plataformas 2'
    },
    {
      name:'GTA 3',
      description:'Juego de aventuras 3',
      plataform:'Todas las plataformas 3'
    }
  ]

  getGames(){ 
    return this.items;
   }

}
