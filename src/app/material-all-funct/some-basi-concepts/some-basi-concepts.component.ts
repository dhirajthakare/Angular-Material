import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-basi-concepts',
  templateUrl: './some-basi-concepts.component.html',
  styleUrls: ['./some-basi-concepts.component.css']
})
export class SomeBasiConceptsComponent implements OnInit {

  constructor() { }
  notification = 0;
  opened = false;

  ngOnInit(): void {
  }

  toggleSlide(){
    this.opened  =! this.opened;
  }
  state(state:any){
    console.log(state);
  }

}
