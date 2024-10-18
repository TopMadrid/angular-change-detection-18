import { Injectable } from '@angular/core';
import { ILogger } from '../interfaces/ilogger';

@Injectable({
  providedIn: 'root'
})
export class RemoteService implements ILogger{

  constructor() { }

  log(message: string): void {
    console.log(`[Remote] ${message}`);
  }
}
