import $ from 'jquery';
import {map} from 'ramda';

import initDesktopMenu           from './Components/DesktopMenu';
import initMobileMenu            from './Components/MobileMenu';
import initTestKnockoutComponent from './Components/TestKnockoutComponent';

import initTestViewModel         from './ViewModels/TestViewModel';

const main = () => {
  map(initDesktopMenu, $('.desktop-menu'))
  map(initMobileMenu,  $('.mobile-menu'))

  map(initTestViewModel, $('#test-view-model'))
  initTestKnockoutComponent()
}

// Side Effects
$(document).ready(() => main())