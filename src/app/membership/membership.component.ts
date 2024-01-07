import { Component } from '@angular/core';
import { fas, faCheckDouble } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {
  faCheck = faCheckDouble;

}
