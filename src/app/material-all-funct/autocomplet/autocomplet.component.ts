import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplet',
  templateUrl: './autocomplet.component.html',
  styleUrls: ['./autocomplet.component.css']
})
export class AutocompletComponent implements OnInit {

  constructor() { }

  options:any = ["angular","Laravel","Expressjs"];
  optionsObject:any = [
    {name:"Angular"},
    {name:"Laravel"},
    {name:"Nodejs"},
    {name:"Laavel"}
  ];

  ngOnInit(): void {
  }

}
