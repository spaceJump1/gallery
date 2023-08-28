import { Component } from '@angular/core';
import { YaConfig} from "angular8-yandex-maps";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  mapConfig: YaConfig = {
    apikey: '00f85a91-3975-45bd-b5cc-8f7d14dff88c',
    lang: 'en_US',
  };
}
