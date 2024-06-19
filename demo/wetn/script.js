// document.addEventListener('DOMContentLoaded', function () {
//     var project_slide = new Splide('.splide', {
//         type: 'loop',
//         perPage: 5,
//         focus: 'center',
//     });

//     project_slide.on('mounted moved', function () {
//         var slides = project_slide.Components.Elements.slides;
//         var currentSlideIndex = project_slide.index;

//         // Remove the third-slide class from all slides
//         slides.forEach(function (slide) {
//             slide.classList.remove('third-slide');
//         });

//         // Add the third-slide class to the original and clone slides
//         var totalSlides = slides.length;
//         var thirdSlideIndex = (currentSlideIndex + 2) % totalSlides;

//         console.log('currentslide ' + currentSlideIndex);
//         console.log('totalslide ' + totalSlides);
//         console.log('thirdslide ' + thirdSlideIndex);

//         // Add class to original third slide
//         slides[thirdSlideIndex].classList.add('third-slide');

//         // Add class to clone third slide
//         var cloneThirdSlideIndex = thirdSlideIndex + totalSlides;
//         if (cloneThirdSlideIndex < slides.length) {
//             slides[cloneThirdSlideIndex].classList.add('third-slide');
//         } else {
//             slides[cloneThirdSlideIndex - totalSlides].classList.add('third-slide');
//         }
//     });

//     project_slide.mount();
// });




document.addEventListener('DOMContentLoaded', function () {
    var project_slide = new Splide('.splide', {
        type: 'loop',
        perPage: 5,
        focus: 'center',
    });

    project_slide.on('mounted moved', function () {
        var slides = project_slide.Components.Elements.slides;
        var currentSlideIndex = project_slide.index;
        var slideCount = project_slide.length;
        var totalSlides = slides.length;

        console.log('slide ' + slides);
        console.log('current slide index ' + currentSlideIndex);
        console.log('slide count ' + slideCount);
        console.log('total count ' + totalSlides);

        slides.forEach(function (slide) {
            slide.classList.remove('third-slide');
            console.log('remove class');
        });

        var thirdSlideIndex = (currentSlideIndex + 2) % totalSlides;
        console.log('third slide index ' + thirdSlideIndex);

        slides[thirdSlideIndex].classList.add('third-slide');
        console.log('third slide added class');

        var cloneThirdSlideIndex = currentSlideIndex + slideCount;
        cloneThirdSlideIndex %= totalSlides; 
        console.log('clone third slide index ' + cloneThirdSlideIndex);

        slides[cloneThirdSlideIndex].classList.add('third-slide');
        console.log('cloned third slide added class');
    });

    project_slide.mount();
});







