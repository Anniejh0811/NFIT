import { Component } from '@angular/core';
import { faClock, faLock, faContactCard, faRunning, faCalendar, faStore} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-members-benefit',
  templateUrl: './members-benefit.component.html',
  styleUrls: ['./members-benefit.component.css']
})
export class MembersBenefitComponent {
  faStore=faStore;
  faCalendar = faCalendar;
  faRunning = faRunning;
  faContract = faContactCard;
  faLock = faLock;
  faClock = faClock;
}
