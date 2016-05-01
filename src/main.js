import $ from 'jquery';
import {map} from 'ramda';

import initDesktopMenu           from './Components/DesktopMenu';
import initMobileMenu            from './Components/MobileMenu';
import initTestKnockoutComponent from './Components/TestKnockoutComponent';

import initTestViewModel         from './ViewModels/TestViewModel';

import WikipediaService          from './Services/WikipediaService';

const main = () => {
  const wikipedia = new WikipediaService();

  map(initDesktopMenu(window)(wikipedia), $('.desktop-menu'))
  map(initMobileMenu(window),             $('.mobile-menu'))

  map(initTestViewModel(window), $('#test-view-model'))
  initTestKnockoutComponent(window)
}

// Side Effects
$(document).ready(() => main())