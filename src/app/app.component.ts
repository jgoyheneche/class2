import { Component } from '@angular/core';
import { LoggerService } from './Services/logger.service';
import { GamesService } from './Services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'class2';
  //title.string = '';  //ESPECIFICANDO EL TIPO DE VARIABLE
  title = 'Curso de Angular - Class2'; //VARIABLE GLOBAL
  subtitle = 'Angular';

  constructor(private logger:LoggerService, private gs:GamesService){}

  viewData(){
    console.log('view Data');
    //this.logger.error("mensaje de prueba");
    //this.logger.warning("mensaje de prueba");
    //this.logger.log("Error, mensaje de prueba");
    try {
      this.logger.log('Iniciando metodo view data');
    } catch (error) {
      this.logger.error(error);
    }
  }

  viewMethod(){
    this.title = 'viewMethod';
  }

  viewGames(){
    console.log(this.gs.getGames());

    return this.gs.getGames();
  }

  
}
