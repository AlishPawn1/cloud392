document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#coverflow-slider', {
      type: 'slide',
      perPage: 5,
      focus: 'center',
      pagination: false,
      rewind: true,
      gap: '1rem',
      autoWidth: true,
    }).mount();

    // Custom transformation for cover flow effect
    function applyCoverflowEffect() {
      var slideIndex = splide.index;
      var slides = splide.Components.Elements.slides;

      slides.forEach(function (slide, index) {
        var diff = index - slideIndex;
        var scale = 1 - Math.abs(diff) * 0.15;
        var rotate = diff * 10; // Rotation angle
        slide.style.transform = `translateZ(${-Math.abs(diff) * 100}px) scale(${scale}) rotateY(${-rotate}deg)`;
      });
    }

    // Apply the effect on init and slide move
    applyCoverflowEffect();
    splide.on('moved', applyCoverflowEffect);
  });