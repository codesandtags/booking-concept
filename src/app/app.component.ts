import { Component } from '@angular/core';

import { faAirbnb, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'booking-concept';
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  faAirbnb = faAirbnb;
  faArrowUp = faArrowCircleUp;
}
