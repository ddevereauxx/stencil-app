import { Component } from '@stencil/core';

@Component({
  tag: 'page-button'
})
export class PageButton {
  testingColors = ['primary', 'secondary', 'danger', 'dark'];
  testingColorIndex = {
    dynamicColor1: 0,
    dynamicColor2: 0
  };

  changeColor(ev) {
    let el = ev.currentTarget;

    this.testingColorIndex[el.id] = this.testingColorIndex[el.id] >= this.testingColors.length - 1 ? 0 : this.testingColorIndex[el.id] + 1;
    let newColor = this.testingColors[this.testingColorIndex[el.id]];

    el.color = newColor;
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Button - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" padding no-bounce text-center>
          <p>
            <ion-button>Default</ion-button>
            <ion-button class="activated">Default.activated</ion-button>
          </p>

          <p>
            <ion-button color="primary">Primary</ion-button>
            <ion-button class="activated" color="primary">
              Primary.activated
            </ion-button>
          </p>

          <p>
            <ion-button color="secondary">Secondary</ion-button>
            <ion-button class="activated" color="secondary">
              Secondary.activated
            </ion-button>
          </p>

          <p>
            <ion-button color="tertiary">Tertiary</ion-button>
            <ion-button class="activated" color="tertiary">
              Tertiary.activated
            </ion-button>
          </p>

          <p>
            <ion-button color="success">Success</ion-button>
            <ion-button class="activated" color="success">
              Success.activated
            </ion-button>
          </p>

          <p>
            <ion-button color="warning">Warning</ion-button>
            <ion-button class="activated" color="warning">
              Warning.activated
            </ion-button>
          </p>

          <p>
            <ion-button color="danger">Danger</ion-button>
            <ion-button class="activated" color="danger">
              Danger.activated
            </ion-button>
          </p>

          <p>
            <ion-button color="light">Light</ion-button>
            <ion-button class="activated" color="light">
              Light.activated
            </ion-button>
          </p>

          <p>
            <ion-button color="medium">Medium</ion-button>
            <ion-button class="activated" color="medium">
              Medium.activated
            </ion-button>
          </p>

          <p>
            <ion-button color="dark">Dark</ion-button>
            <ion-button class="activated" color="dark">
              Dark.activated
            </ion-button>
          </p>

          <p>
            <ion-button disabled>Button Disabled</ion-button>
            <ion-button color="secondary" disabled>
              Secondary Disabled
            </ion-button>
          </p>

          <p>
            <ion-button id="dynamicColor1" onClick={() => this.changeColor(event)}>
              Change Color
            </ion-button>
            <ion-button id="dynamicColor2" onClick={() => this.changeColor(event)} fill="outline">
              Change Color
            </ion-button>
          </p>
        </ion-content>
      </div>
    );
  }
}
