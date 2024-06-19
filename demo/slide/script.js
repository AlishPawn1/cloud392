document.addEventListener('DOMContentLoaded', function () {
    var project_slide = new Splide('.splide', {
      type: 'loop',
      perPage: 5,
      focus: 'center',
    });
  
    // project_slide.on('ready move', function () {
    //   console.log('Move event triggered');
    //   var slides = project_slide.Components.Elements.slides;
  
    //   // Remove the preve and nexte classes from all slides
    //   slides.forEach(function (slide) {
    //     slide.classList.remove('preve', 'nexte');
    //   });
  
    //   var prevSlide = document.querySelector('.splide__slide.is-prev');
    //     var nextSlide = document.querySelector('.splide__slide.is-next');
    //     console.log('Prev slide:', prevSlide);
    //     console.log('Next slide:', nextSlide);
    //     if (prevSlide) {
    //       prevSlide.classList.add('preve');
    //       console.log('Added preve class to previous slide:', prevSlide);
    //     }
    //     if (nextSlide) {
    //       nextSlide.classList.add('nexte');
    //       console.log('Added nexte class to next slide:', nextSlide);
    //     } else {
    //       console.log('Previous slide with is-prev and next slide with is-next class not found among clones.');
    //     }
    // });

    project_slide.on('mounted move', function(){
        var slides = project_slide.Components.Elements.slides;
        var lastIndex = slides.length - 1;
        
        slides.forEach(function (slide, index) {
            slide.classList.remove('last-slide');

            if(index === lastIndex) {
                slide.classList.add('last-slide');
            }
        });
    });
    
    
  
    project_slide.mount();
  });
  