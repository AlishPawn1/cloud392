
jQuery(function ($){

    // bottom-to-top
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        }
        else {
        btn.removeClass('show');
        }
    });

    

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });


    $(document).ready(function(){
        function handleScroll() {
            if ($(window).scrollTop() > 100) {
                $('header').addClass('sticky');
            } else {
                $('header').removeClass('sticky');
            }
        }
    
        handleScroll();
    
        $(window).scroll(function() {
            handleScroll();
        });
    });
    

    $(document).ready(function() {
        $(".primary-menu li.menu-dropdown > a").append('<span class="dropdown-btn"><i class="fas fa-chevron-down"></i></span>');
    
        $('.dropdown-btn').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            var $parentLi = $(this).parent().parent();
            $parentLi.toggleClass('open').siblings().removeClass('open');
            $parentLi.find("ul.sub-menu").first().slideToggle();
            $parentLi.siblings().find("ul.sub-menu").slideUp().parent().removeClass('open');
        });
    
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.menu-dropdown').length) {
                $('.menu-dropdown').removeClass('open');
                $('.sub-menu').slideUp();
            }
        });
    });
    
    $('.primary-menu li').has('ul').addClass('menu-dropdown');

    $(document).ready(function() {
        var currentPath = window.location.pathname.replace(/\/$/, '');
        // console.log("Current Path:", currentPath);

        $('.primary-menu a').each(function() {
            var href = $(this).attr('href').replace(/\/$/, '');
            // console.log(href);
            var lastPartHref = href.substring(href.lastIndexOf('/') + 1);
            // console.log(lastPartHref);
            if (currentPath.endsWith(lastPartHref)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
    $(document).ready(function(){
        $('.hamburger').click(function(){
            $(this).toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.primary-menu').toggleClass('active');
        });
    
        $('.overlay').click(function(){
            $('.overlay').removeClass('active');
            $('.hamburger').removeClass('active');
            $('.primary-menu').removeClass('active');
        });
    });

    $(document).ready(function() {
        $(window).on('scroll', function() {
            let scrollPosition = $(window).scrollTop();
    
            $('.service-inner-list').each(function() {
                let section = $(this);
                let sectionId = section.attr('id');
                let sectionOffset = section.offset().top - 100;
                let sectionHeight = section.outerHeight();
    
                if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                    $('.service-list-group a').removeClass('active');
                    $('.service-list-group a[href="#' + sectionId + '"]').addClass('active');
                }
            });
        });
    });

   

if(document.querySelector('.single-project')){
    var mobileMode = document.querySelector('.mobile-mode');
    var mobileImages = mobileMode.querySelectorAll('img');
    
    function toggleMoveClassMobile() {
        mobileImages.forEach(function(image) {
            image.classList.toggle('move');
        });
    }
    
    mobileMode.addEventListener('mouseenter', toggleMoveClassMobile);
    mobileMode.addEventListener('mouseleave', toggleMoveClassMobile);

    var laptopMode = document.querySelector('.laptop-mode figure');
    var laptopImages = laptopMode.querySelectorAll('img');

    function toggleMoveClassLaptop() {
        laptopImages.forEach(function(image) {
            console.log("Toggling class for image:", image);
            image.classList.toggle('move');
        });
    }

    laptopMode.addEventListener('mouseenter', toggleMoveClassLaptop);
    laptopMode.addEventListener('mouseleave', toggleMoveClassLaptop);
}




document.addEventListener('DOMContentLoaded', function() {
    var switchPackage = document.getElementById('switch-package');

    // Add event listener to checkbox change
    switchPackage.addEventListener('change', function() {
        console.log('Checkbox state changed');

        // Get all elements with the class 'option' within the 'slide-toggle' container
        var options = document.querySelectorAll('.slide-toggle .option');
        console.log('Found options:', options);

        // Loop through each 'option' element
        options.forEach(function(option) {
            console.log('Toggling class for option:', option);

            // Toggle the 'active' class based on the checkbox state
            if (switchPackage.checked) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    });
});

    $("#switch-package").change(function() {
        if(this.checked) {
            $('.mont-annul .monthly-plan').css('display', 'none');
            $('.mont-annul .yearly-plan').css('display', 'block');
            $('.afterinput').addClass('active');
            $('.beforeinput').removeClass('active');
        } else {
            $('.mont-annul .monthly-plan').css('display', 'block');
            $('.mont-annul .yearly-plan').css('display', 'none');
            $('.afterinput').removeClass('active');
            $('.beforeinput').addClass('active');
        }
	});

    $(document).ready(function() {
        $('.process-advanced-tab-container').not('.active').hide();

        $('.process-shape-tabs .tabs, .process-tab-list').mouseenter(function() {
            var tabId = $(this).data('tab');
            $('.process-shape-tabs .tabs, .process-tab-list').removeClass('active');
            $('[data-tab="' + tabId + '"]').addClass('active'); 
            $('.process-advanced-tab-container').hide(); 
            $('[data-tab-content="' + tabId + '"]').show();
        });
    });
    

});

new WOW().init();

if(document.querySelector('.banner-slide')){
    banner_slide = new Splide('.banner-slide',{
        perPage:1,
        type  : 'fade',
        rewind: true,
        autoplay: true,
        pagination: false,
        arrows: false,
    }).mount();
}
if(document.querySelector('.program-use-slide')){
    program_use_slide = new Splide('.program-use-slide',{
        type: 'loop',
        arrows: false,
        perPage: 5,
        pagination: false,
        autoScroll: {
            speed: 0.5,
            pauseOnHover: false,
        },
    }).mount(window.splide.Extensions);
}
if(document.querySelector('.we-do-slide')){
    we_do_slide = new Splide('.we-do-slide', {
        type: 'loop',
        perPage: 3,
        perMove: 1,
        gap: 30,
        focus: 'center',
    }).mount();
}

// if (document.querySelector('.project-slide')) {
//     var project_slide = new Splide('.project-slide', {
//         type: 'loop',
//         // rewind: true,
//         perPage: 1,
//         perMove: 1,
//         focus: 'center',
//         flickMaxPages: 3,
//         updateOnMove: true,
//         prev:true,
//     });

//     project_slide.on('move mounted', function () {
//         var slides = project_slide.Components.Elements.slides;
//         var currentIndex = project_slide.index;
//         var lastIndex = slides.length - 1;
//         slides.forEach(function (slide, index) {
//             slide.classList.remove('is-lnext', 'is-lprev');
//             if (index === (currentIndex + 2)  % (lastIndex + 1)) {
//                 slide.classList.add('is-lnext');
//             } else if (index === (currentIndex - 2 + slides.length ) % (lastIndex + 1) ) {
//                 slide.classList.add('is-lprev');
//             }            
//         });
//         // var cIndex = project_slide.index + project_slide.length / 2;
//         // if (cIndex >= splide.length) {
//         //     cIndex -= splide.length;
//         //   }
//         //   console.log('Current Index:', cIndex);
          

//     // var cIndex = slides.getIndex(1); // Get the index of the current slide, including clones.
//     // console.log('Current Index (including clones):', cIndex);

//     });

//     project_slide.mount();
// }


// if (document.querySelector('.project-slide')) {
//     var project_slide = new Splide('.project-slide', {
//         type: 'loop',
//         perPage: 5,
//         perMove: 1,
//         focus: 'center',
        // flickMaxPages: 3,
        // updateOnMove: true,
    // });

    // project_slide.on('mounted', function () {
    //     var slides = project_slide.Components.Elements.slides;
    //     var lastIndex = slides.length - 1;
    //     var currentIndex = project_slide.index;
        
    //     slides.forEach(function (slide, index) {
    //         slide.classList.remove('is-lnext', 'is-lprev');

    //         if (index === (currentIndex + 2) % (lastIndex + 1)) {
    //             slide.classList.add('is-lnext');
    //         } else if (index === (currentIndex - 2 + slides.length) % (lastIndex + 1)) {
    //             slide.classList.add('is-lprev');
    //         }
    //     });
        
    //     // Get the slide before and after the current slide
    //     var prevIndex = (currentIndex - 1 + slides.length) % (lastIndex + 1);
    //     var nextIndex = (currentIndex + 1) % (lastIndex + 1);
    //     var prevSlide = slides[prevIndex];
    //     var nextSlide = slides[nextIndex];
        
    //     // Add is-lprev and is-lnext classes to the previous and next slides
    //     prevSlide.classList.add('is-lprev');
    //     nextSlide.classList.add('is-lnext');
    // });

//     project_slide.mount();
// }

if (document.querySelector('.project-slide')) {
    var project_slide = new Splide('.project-slide', {
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
}

if(document.querySelector('.project-slide-clone')){
    var project_slide_clone = new Splide('.project-slide-clone',{
        perPage: 1,
        perMove: 1,
        type: 'loop',
        focus: 'center',
        // direction: 'ltr',
    }).mount();
}
            