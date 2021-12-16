import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-open-dialog-container',
  templateUrl: './open-dialog-container.component.html',
  styleUrls: ['./open-dialog-container.component.css']
})
export class OpenDialogContainerComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
  }
  closebtn(){
      
  }

}
