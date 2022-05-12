$(document).ready(function () {
  $('.img-tumb').click(function (e) {
    e.preventDefault();
    const blankImg = $('.carousel_img').get(0);
    const src = e.target.src;
    blankImg.src = src;
  });
});
