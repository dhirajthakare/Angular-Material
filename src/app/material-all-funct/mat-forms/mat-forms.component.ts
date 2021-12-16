import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-forms',
  templateUrl: './mat-forms.component.html',
  styleUrls: ['./mat-forms.component.css']
})
export class MatFormsComponent implements OnInit {

  constructor() { }
  single:any;
  multiple:any;

  ngOnInit(): void {
  }

  selected(selecte:any){
    console.log(selecte);
  }
  mindate=new Date();
  funct1(state:any){
    console.log(state);
    let output = state.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
    console.log(output)

  }
}
