const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItem = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls, nav) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselNav = nav;
        this.carouselArray = [...items];
        this.currentIndex = 0;
        this.transitioning = false;
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });

        // Update navigation dots
        this.carouselNav.forEach((dot, index) => {
            dot.classList.toggle('gallery-item-selected', index === this.currentIndex);
        });
    }

    setCurrentState(direction) {
        if (direction.className === 'gallery-controls-previous') {
            this.currentIndex = (this.currentIndex - 1 + this.carouselArray.length) % this.carouselArray.length;
        } else {
            this.currentIndex = (this.currentIndex + 1) % this.carouselArray.length;
        }
        this.carouselArray.unshift(this.carouselArray.pop());
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
    }

    setNavigation() {
        this.carouselNav.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.currentIndex = index;
                this.updateGallery();
            });
        });
    }    

    useControls() {
        console.log(galleryControlsContainer); // Debug log
        const triggers = [...galleryControlsContainer.childNodes];
        console.log(triggers); // Debug log
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                console.log(`Clicked on ${control.innerText} button.`);
                this.setCurrentState(control);
            });
        });
    }

    linkNavigationToImages() {
        // Link navigation dots to images
        this.carouselNav.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.currentIndex = index;
                this.updateGallery();
            });
        });

        // Link images to navigation dots
        this.carouselArray.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.currentIndex = index;
                this.updateGallery();
            });
        });
    }
}

const galleryNav = document.querySelectorAll('.gallery-nav li');
const exampleCarousel = new Carousel(galleryContainer, galleryItem, galleryControls, galleryNav);
exampleCarousel.setControls();
exampleCarousel.linkNavigationToImages();
exampleCarousel.useControls();
