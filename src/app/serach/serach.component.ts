import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  @Output() send= new EventEmitter<number>();
  @Output() sendAge= new EventEmitter<number>();


  selected;
  age;
  data:Array<Object> = [
      {id: 0, name: "none"},
      {id: 1, name: "Pas en stock"},
      {id: 2, name: "En stock"},

  ];
  dataAge:Array<Object> = [
    {id: 0, name: "none"},
    {id: 1, name: "inferieur 2 ans"},
    {id: 2, name: "entre 2 et 5"},
    {id: 3, name: "superieur à 5"},

];


  constructor() { }

  ngOnInit(): void {
  }
  changer(){
    console.log(this.selected.id);
    this.send.emit(this.selected.id);
  }
  changerAge(){
    console.log(this.age.id);
    this.sendAge.emit(this.age.id);
  }

}
