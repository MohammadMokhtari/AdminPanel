('use strict');

const _getWidth = () => {
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
};

const _disableOverFlow = () => {
  document.body.style.overflow = 'hidden';
};

const getScrollTop = () => {
  return window.scrollY;
};

const hide = (width = _getWidth()) => {
  _disableOverFlow();
  document.body.style.paddingRight = width;
};

const reset = () => {
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = 0;
};

export { hide, reset, getScrollTop };
