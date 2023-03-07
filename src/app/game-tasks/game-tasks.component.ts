import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-game-tasks',
  templateUrl: './game-tasks.component.html',
  styleUrls: ['./game-tasks.component.scss']
})
export class GameTasksComponent implements OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Start drinking and everyone must follow. You cannot stop until the person before you stops.' },
    { title: 'You', description: 'Choose another player to take a drink.' },
    { title: 'Me', description: 'You take a drink.' },
    { title: 'Floor', description: 'Everyone must touch the floor with their hand. The last person to do so takes a drink.' },
    { title: 'Guys', description: 'All the guys take a drink.' },
    { title: 'Chicks', description: 'All the girls take a drink.' },
    { title: 'Heaven', description: 'Everyone must point to the ceiling. The last person to do so takes a drink.' },
    { title: 'Mate', description: 'Choose someone to be your mate. Whenever you drink, they must drink too.' },
    { title: 'Pour', description: 'Pour some of your drink into the Kings Cup in the center of the table. When the fourth King is drawn, the person who drew it must drink the entire contents of the Kings Cup.' },
    { title: 'Quizmaster', description: 'Whenever you ask a question, if someone answers it they must take a drink.' },
    { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  title = '';
  description = '';
  @Input() card: string;

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
