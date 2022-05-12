('use strict');

import { DomHelper } from '../util/DomHelper';
import selectorEngin from '../util/selectorEngin';
('../util/DomHelper');
import SelectorEngine from '../util/selectorEngin';

const SUBMENU_CLASSNAME = '.asid-menu-sub';
const ASIDE_MENU_ITEM_CLASSNAME = '.aside-menu-item';
const ASIDE_ARROW_CLASSNAME = '.aside-menu-arrow';
const SUBMENU_SHOW_CLASSNAME = 'show';
//
//
export class Aside {
  //privete filde
  _offCanvas = false;
  items = [];
  constructor(elementSelector) {
    if (typeof elementSelector === 'undefined' || elementSelector == null) {
      return;
    }
    this.hookElement = SelectorEngine.findOne(elementSelector); // aside element
    this.toggleButtonEl = selectorEngin.findOne(
      '.aside-btn-toggle',
      this.hookElement
    ); // toggle button

    this.asideMobileBtn = selectorEngin.findOne('.aside-mobile-toggle');
    this.items = selectorEngin.find(
      ASIDE_MENU_ITEM_CLASSNAME,
      this.hookElement
    );
    //initialize
    this._init();
  }

  // initialize
  _init() {
    this._offCanvasHandler();
    this._itemsHandler();
    this._openAsideMobile();
    this._hideAside();
  }
  _hideAside() {
    const backDrop = DomHelper.getBackDrop();
    backDrop.addEventListener('click', () => {
      if (DomHelper.hasClass(this.hookElement, 'active')) {
        this.hookElement.classList.remove('active');
        DomHelper.hideBackDrop();
        this._resetItems();
      } else {
        return;
      }
    });
  }

  // aside Toggle
  _asideOffCanvas() {
    if (this._offCanvas === true) {
      this._showArrow();
      this._showTitle();
      this._incAideWidth();
    } else {
      this._resetItems();
      this._hideArrow();
      this._hideTitle();
      this._decAsideWidth();
    }

    this._hideAsideContent();
    this._asideOffCanvasLogo();
    this._rotateBtnToggle();
    this._offCanvas = !this._offCanvas;
  }

  _offCanvasHandler() {
    this.toggleButtonEl.addEventListener(
      'click',
      this._asideOffCanvas.bind(this)
    );
  }

  // menu items behovior
  _itemsHandler() {
    this.items = selectorEngin.find(
      ASIDE_MENU_ITEM_CLASSNAME,
      this.hookElement
    );
    this.items.forEach((item) => {
      item.addEventListener('click', this._toggleSub.bind(this, item));
    });
  }

  // show subMennu
  _showSub(itemElement) {
    if (!this._hasSubMenu(itemElement)) {
      return;
    }
    const subMenuEl = this._getInstanceSubMenu(itemElement);

    if (!subMenuEl) {
      return;
    }
    DomHelper.addCLassName(subMenuEl, SUBMENU_SHOW_CLASSNAME);
    this._arrowDown(itemElement);
  }
  // hide subMenu
  _hideSub(itemElement) {
    if (!this._hasSubMenu(itemElement)) {
      return;
    }
    const subMenuEl = this._getInstanceSubMenu(itemElement);

    if (!subMenuEl) {
      return;
    }
    DomHelper.removeClassName(subMenuEl, SUBMENU_SHOW_CLASSNAME);
    this._arrowUp(itemElement);
  }

  // toggle SubMenu
  _toggleSub(itemElement) {
    // if Offcanvas true return

    if (this._offCanvas) {
      return;
    }
    return this._subIsShow(itemElement)
      ? this._hideSub(itemElement)
      : this._showSub(itemElement);
  }

  // subMenu Is Show!!
  _subIsShow(itemElement) {
    if (!this._hasSubMenu(itemElement)) {
      return false;
    }
    const subMenu = this._getInstanceSubMenu(itemElement);
    if (DomHelper.hasClass(subMenu, 'show')) {
      return true;
    }
    return false;
  }

  /// item has subMenu ?
  _hasSubMenu(element) {
    return DomHelper.hasChild(element, SUBMENU_CLASSNAME);
  }

  // get instance subMenu
  _getInstanceSubMenu(item) {
    return selectorEngin.findOne(SUBMENU_CLASSNAME, item);
  }

  _arrowDown(itemEl) {
    const arrow = selectorEngin.findOne(ASIDE_ARROW_CLASSNAME, itemEl);
    arrow.classList.add('rotate');
  }

  _arrowUp(itemEl) {
    const arrow = selectorEngin.findOne(ASIDE_ARROW_CLASSNAME, itemEl);
    arrow.classList.remove('rotate');
  }

  // reset AsideItems
  _resetItems() {
    const allSubMenu = selectorEngin.find(SUBMENU_CLASSNAME, this.hookElement);
    allSubMenu.forEach((item) => {
      item.classList.remove('show');
    });
    const allArrows = selectorEngin.find(
      ASIDE_ARROW_CLASSNAME,
      this.hookElement
    );
    allArrows.forEach((item) => {
      item.classList.remove('rotate');
    });
  }

  // hide asde content title
  _hideAsideContent() {
    const contents = selectorEngin.find('.menu-content', this.hookElement);
    contents.forEach((content) => {
      content.classList.toggle('hide');
    });
  }

  _showAsideContent() {
    if (this._offCanvas) {
      const contents = selectorEngin.find('.menu-content', this.hookElement);
      contents.forEach((content) => {
        content.classList.remove('hide');
      });
    }
  }

  // hide aside title Item
  _hideTitle() {
    if (!this._offCanvas) {
      const titles = selectorEngin.find('.aside-menu-title', this.hookElement);
      titles.forEach((title) => {
        title.classList.add('hide');
      });
    }
  }

  _showTitle() {
    const titles = selectorEngin.find('.aside-menu-title', this.hookElement);
    titles.forEach((title) => {
      title.classList.remove('hide');
    });
  }

  _hideArrow() {
    const titles = selectorEngin.find('.aside-menu-arrow', this.hookElement);
    titles.forEach((title) => {
      title.classList.add('hide');
    });
  }

  _showArrow() {
    const titles = selectorEngin.find('.aside-menu-arrow', this.hookElement);
    titles.forEach((title) => {
      title.classList.remove('hide');
    });
  }

  _asideOffCanvasLogo() {
    const logo = selectorEngin.findOne('.aside-logo', this.hookElement);
    logo.classList.toggle('hide_logo');
  }

  _decAsideWidth() {
    this.hookElement.style.width = '75px';
    const warraper = selectorEngin.findOne('.wrapper');
    warraper.classList.add('fix');
  }

  _incAideWidth() {
    this.hookElement.style.width = '285px';
    const warraper = selectorEngin.findOne('.wrapper');
    warraper.classList.remove('fix');
  }

  _rotateBtnToggle() {
    this.toggleButtonEl.classList.toggle('rotete');
    this.toggleButtonEl.classList.toggle('active');
  }

  _openAsideMobile() {
    if (this.asideMobileBtn === null) {
      return;
    }
    this.asideMobileBtn.addEventListener(
      'click',
      this._openAsideHandler.bind(this)
    );
  }

  _openAsideHandler() {
    this.hookElement.classList.add('active');
    DomHelper.showBackDrop();
  }
}
