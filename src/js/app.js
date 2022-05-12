('use strict');

import { Aside } from './app/aside';
import form from './app/forms';
import dropdown from './app/dropdown';
import './app/swiper';
import './app/index';

class App {
  static init() {
    new Aside('.aside');
    dropdown.initDropdown();
    form.initForms();
  }
}
App.init();
