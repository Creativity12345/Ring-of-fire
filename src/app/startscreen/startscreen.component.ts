import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent {
  constructor(private firestore: AngularFirestore, private router: Router) {

  }
  newGame() {
    let game = new Game();
    this.firestore.collection('games').add(game.toJSON()).then((gameInfo: any) => { 
      this.router.navigateByUrl('/game/' + gameInfo['id']);
    });
  }
}