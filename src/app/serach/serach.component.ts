import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Search } from 'src/models/search';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  @Output() send= new EventEmitter<number>();
  @Output() sendAge= new EventEmitter<number>();
  @Output() sendName= new EventEmitter<string>();
  search:Search;








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
    this.search=new Search();

  }
  changer(){
    console.log(this.selected.id);
    this.send.emit(this.selected.id);
  }
  changerAge(){
    console.log(this.age.id);
    this.sendAge.emit(this.age.id);
  }
  changerName(){
    console.log(this.search.name);
    this.sendName.emit(this.search.name);
  }
 

}
