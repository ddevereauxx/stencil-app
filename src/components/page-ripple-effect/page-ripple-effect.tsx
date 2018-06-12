import { Component } from '@stencil/core';

@Component({
  tag: 'page-ripple-effect',
  styleUrl: 'page-ripple-effect.css'
})
export class PageRippleEffect {
  componentDidLoad() {
    console.log('Component PageRippleEffect was loaded');
  }

  blockClicked() {
    console.log('block clicked');
    return true;
  }

  buttonClicked() {
    console.log('button clicked');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Button Effect - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding no-bounce>
          <p>
            <ion-button size="small">Small</ion-button>
          </p>
          <p>
            <ion-button size="large">Large</ion-button>
          </p>
          <p>
            <ion-button size="large" fill="outline">
              Large
            </ion-button>
          </p>
          <p>
            <ion-button size="large" fill="clear">
              Large
            </ion-button>
          </p>
          <div class="my-block">
            <ion-ripple-effect />
            This is just a div + effect behind
            <ion-button onClick={() => this.buttonClicked()}>Nested button</ion-button>
          </div>
          <div class="my-block">
            This is just a div + effect on top
            <ion-button onClick={() => this.buttonClicked()}>Nested button</ion-button>
            <ion-ripple-effect />
          </div>

          <div class="my-block">
            This is just a div + effect
            <ion-ripple-effect />
          </div>

          <a class="my-block">
            This is just a a + effect on top
            <ion-button onClick={() => this.buttonClicked()}>Nested button</ion-button>
            <ion-ripple-effect />
          </a>

          <button class="my-block">
            This is just a button + effect on top
            <ion-button onClick={() => this.buttonClicked()}>Nested button</ion-button>
            <ion-ripple-effect />
          </button>
        </ion-content>
      </div>
    );
  }
}
