import { Component } from '@stencil/core';

@Component({
  tag: 'page-tap-click',
  styleUrl: 'page-tap-click.css'
})
export class PageTapClick {
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
        </ion-content>
      </div>
    );
  }
}
