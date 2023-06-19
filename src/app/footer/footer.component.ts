import { Component } from '@angular/core';
import {IContacts} from "../../model/contacts";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  contacts: IContacts = {
    number: '+7 (000) 000 - 00 - 00',
    adress: 'г. Санкт-Петербург, пр. Невский 3',
    email: 'hvzeart@gallery.com'
  };

}
