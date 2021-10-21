import { Injectable } from '@angular/core';
import { uniq as _uniq } from 'lodash'; 

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  virerDoublon(tableau : number[]) : number[]{
    return _uniq(tableau);
  }

}
