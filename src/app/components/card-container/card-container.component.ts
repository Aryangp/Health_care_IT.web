import { Component, Input } from '@angular/core';
import { cardInterface } from 'src/interfaces/cardInter';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  @Input() cardItem:cardInterface;
}
