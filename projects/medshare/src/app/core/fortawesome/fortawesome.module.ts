import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import {
  faBars,
  faBook,
  faCaretDown,
  faCaretUp,
  faDollarSign,
  faCheck,
  faCog,
  faEdit,
  faExclamationTriangle,
  faFilter,
  faLanguage,
  faLightbulb,
  faPaintBrush,
  faPlayCircle,
  faPlus,
  faPowerOff,
  faRocket,
  faSquare,
  faStar,
  faStream,
  faTasks,
  faTimes,
  faTrash,
  faUserCircle,
  faWindowMaximize
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faGithub,
  faInstagram,
  faMediumM,
  faTwitter,
  faWhatsapp,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [FontAwesomeModule]
})
export class FortawesomeModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faBars,
      faBook,
      faCaretDown,
      faCaretUp,
      faCheck,
      faCog,
      faDollarSign,
      faEdit,
      faExclamationTriangle,
      faFilter,
      faLanguage,
      faLightbulb,
      faPaintBrush,
      faPlayCircle,
      faPlus,
      faPowerOff,
      faRocket,
      faSquare,
      faStar,
      faStream,
      faTasks,
      faTimes,
      faTrash,
      faUserCircle,
      faWindowMaximize,

      faDiscord,
      faGithub,
      faInstagram,
      faMediumM,
      faTwitter,
      faWhatsapp,
      faYoutube
    );
  }
}
