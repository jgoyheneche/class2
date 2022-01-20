import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(msg:any){
    console.log('Información, ' + msg);
  }

  error(msg:any){
    console.error('Error, ' + msg);
  }

  warning(msg:any){
    console.warn('Advertencia, ' + msg);
  }

}
