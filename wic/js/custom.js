// Custom JS code can go here

// Reveal options:
Reveal.configure({
    center: true,
    controls: false,
    transition: 'slide',
    transitionSpeed: 'fast',
    backgroundTransition: 'slide'
});


// Bigify
Reveal.addEventListener('ready', bigify);
Reveal.addEventListener('slidechanged', bigify);
window.addEventListener("resize", bigify);

function bigify(event) {
  var slide = event.currentSlide || Reveal.getCurrentSlide(),
      slidesDiv = document.getElementsByClassName('slides')[0],
      i = 0;

  if (slide.classList.contains('big')) {
    while (slide.offsetHeight < slidesDiv.offsetHeight) {
      i += 1;
      slide.style.fontSize = i + 'px';
    }
    slide.style.fontSize = i - 3 + 'px';
  }
}


// Change slide theme
Reveal.addEventListener('slidechanged',  rethemer);
Reveal.addEventListener( 'ready', rethemer);

function rethemer (event) {
  var themeEl = document.getElementById('theme');
  var cTheme = themeEl.getAttribute('href').split('/')[2].split('.')[0];
  var slide = event.currentSlide,
      sTheme = slide ? slide.dataset.theme : undefined;

    // remember what default is
    rethemer.dTheme = rethemer.dTheme || cTheme;

    // set data-theme attribute if it exists
    if (sTheme && sTheme !== cTheme) {
      themeEl.setAttribute('href','css/theme/' + sTheme + '.css');
    }
    else if (!sTheme && cTheme !== rethemer.dTheme) {
      themeEl.setAttribute('href', 'css/theme/' + rethemer.dTheme + '.css');
    }
}




// Headjs
// (an outdated version of) http://headjs.com/ is also loaded
// head.ready("lodash.min.js", function () {
//   // LoDash can be used from here
// });
// head.js("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js");
