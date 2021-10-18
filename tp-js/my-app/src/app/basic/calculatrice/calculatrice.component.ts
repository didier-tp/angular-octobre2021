import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

  a : number = 0 ;  //à saisir
  b : number = 0 ;  //à saisir
  res  : number = 0; //à afficher 

  calculer() : void {
     //this.res = this.a + this.b;
     this.res = Number(this.a) + Number(this.b);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
