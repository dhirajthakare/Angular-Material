import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenDialogContainerComponent } from '../open-dialog-container/open-dialog-container.component';

@Component({
  selector: 'app-dialog-exmaple',
  templateUrl: './dialog-exmaple.component.html',
  styleUrls: ['./dialog-exmaple.component.css']
})
export class DialogExmapleComponent implements OnInit {

  constructor( private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openDia(){
    let dialogref = this.dialog.open(OpenDialogContainerComponent , { height: '400px',width: '400px', data:{
      Name:'Dhiraj',
      Sirname:'Thakare'
    }});
    dialogref.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }
}
