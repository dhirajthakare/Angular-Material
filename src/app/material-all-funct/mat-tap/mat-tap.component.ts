import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-tap',
  templateUrl: './mat-tap.component.html',
  styleUrls: ['./mat-tap.component.css']
})
export class MatTapComponent implements OnInit {

  constructor() { }

  tapreferencetab:any;
  ngOnInit(): void {
  }
  logstate(state:any){
    this.tapreferencetab=state;
    console.log(state)
  }

}
