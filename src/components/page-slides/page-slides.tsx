import { Component } from '@stencil/core';

@Component({
  tag: 'page-slides',
  styleUrl: 'page-slides.css'
})
export class PageSlides {
  slides: any;

  componentDidLoad() {
    this.slides = document.getElementById('slides');
    this.slides.pager = false;
    this.slides.options = {};
    this.slides.addEventListener('ionSlideDidChange', function(e) {
      console.log('slide did change', e);
    });
    this.slides.addEventListener('ionSlideWillChange', function(e) {
      console.log('slide will change', e);
    });
    this.slides.addEventListener('ionSlideNextStart', function(e) {
      console.log('slide next start', e);
    });
    this.slides.addEventListener('ionSlidePrevStart', function(e) {
      console.log('slide prev start', e);
    });
    this.slides.addEventListener('ionSlideNextEnd', function(e) {
      console.log('slide next end', e);
    });
    this.slides.addEventListener('ionSlidePrevEnd', function(e) {
      console.log('slide prev end', e);
    });
    this.slides.addEventListener('ionSlideTransitionStart', function(e) {
      console.log('slide transition start', e);
    });
    this.slides.addEventListener('ionSlideTransitionEnd', function(e) {
      console.log('slide transistion end', e);
    });
    this.slides.addEventListener('ionSlideDrag', function(e) {
      console.log('slide drag', e);
    });
    this.slides.addEventListener('ionSlideReachStart', function(e) {
      console.log('slide reach start', e);
    });
    this.slides.addEventListener('ionSlideReachEnd', function(e) {
      console.log('slide reach end', e);
    });
    this.slides.addEventListener('ionSlideTouchStart', function(e) {
      console.log('slide touch start', e);
    });
    this.slides.addEventListener('ionSlideTouchEnd', function(e) {
      console.log('slide touch end', e);
    });
  }

  slideNext() {
    this.slides.slideNext(500);
  }

  slidePrev() {
    this.slides.slidePrev(500);
  }

  slideTo() {
    this.slides.slideTo(2);
  }

  slideAutoPlay() {
    this.slides.options = Object.assign({}, this.slides.options, {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    });
    this.slides.startAutoplay();
  }

  slideStopAutoPlay() {
    this.slides.stopAutoplay();
  }

  setOptions() {
    this.slides.options = Object.assign({}, this.slides.options, {
      slidesPerView: 2
    });
  }

  slideLength() {
    console.log(this.slides.length());
  }

  getActiveIndex() {
    console.log(this.slides.getActiveIndex());
  }

  getPreviousIndex() {
    console.log(this.slides.getPreviousIndex());
  }

  isEnd() {
    console.log(this.slides.isEnd());
  }

  isBeginning() {
    console.log(this.slides.isBeginning());
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content id="content">
          <ion-slides style={{ background: 'black' }} id="slides" pager>
            <ion-slide style={{ background: 'red', color: 'white' }}>
              <h1>Slide 1</h1>
            </ion-slide>
            <ion-slide style={{ background: 'white', color: 'blue' }}>
              <h1>Slide 2</h1>
            </ion-slide>
            <ion-slide style={{ background: 'blue', color: 'white' }}>
              <h1>Slide 3</h1>
            </ion-slide>
          </ion-slides>
          <ion-button expand="block" onClick={() => this.slidePrev()}>
            Slide Prev
          </ion-button>
          <ion-button expand="block" onClick={() => this.slideNext()}>
            Slide Next
          </ion-button>
          <ion-button expand="block" onClick={() => this.getActiveIndex()}>
            Get Active Index
          </ion-button>
          <ion-button expand="block" onClick={() => this.getPreviousIndex()}>
            Get Previous Index
          </ion-button>

          <ion-button expand="block" onClick={() => this.isEnd()}>
            Is the End?
          </ion-button>
          <ion-button expand="block" onClick={() => this.isBeginning()}>
            Is the beginning?
          </ion-button>

          <ion-button expand="block" onClick={() => this.slideTo()}>
            Slide to slide index 2
          </ion-button>
          <ion-button expand="block" onClick={() => this.slideLength()}>
            Get slide length
          </ion-button>
          <ion-button expand="block" onClick={() => this.slideAutoPlay()}>
            Start auto play
          </ion-button>
          <ion-button expand="block" onClick={() => this.slideStopAutoPlay()}>
            Stop auto play
          </ion-button>
          <ion-button expand="block" onClick={() => this.setOptions()}>
            Set options
          </ion-button>
        </ion-content>
      </div>
    );
  }
}
