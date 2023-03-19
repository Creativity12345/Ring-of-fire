import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-player',
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss']
})
export class DialogAddPlayerComponent {
  name: string = '';
  public images = [
    {
      img: 'assets/img/player/female.png',
    },
    {
      img: 'assets/img/player/male.png',
    },
  ];

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>,) { }

  onNoClick() {
    this.dialogRef.close();
  }

  setSelectedImageId(imageId){
    console.log('works', imageId);
  }
}
