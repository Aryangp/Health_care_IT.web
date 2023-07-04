import { Component } from '@angular/core';
import { cardInterface } from 'src/interfaces/cardInter';

@Component({
  selector: 'app-service-container',
  templateUrl: './service-container.component.html',
  styleUrls: ['./service-container.component.scss']
})
export class ServiceContainerComponent {
  cardData:cardInterface[] = [
    {
      imgUrl:"../../../assets/Frame.svg",
      title:"Search Docter",
      description:"Find the right doctor for you and book an appointment"
    },
    {
      imgUrl:"../../../assets/detail.svg",
      title:"View Details",
      description:"View details of your previous prescriptions and appointments"
    },
    {
      imgUrl:"../../../assets/emergency.svg",
      title:"Emergency",
      description:"Get emergency help from the nearest hospital"
    }
   ]
}
