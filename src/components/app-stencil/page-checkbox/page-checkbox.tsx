import { Component } from '@stencil/core';


@Component({
  tag: 'page-checkbox',
  styleUrl: 'page-checkbox.scss'
})
export class PageCheckbox {
  componentDidLoad() {
    console.log('Component PageCheckbox was loaded');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content padding>
          <h2>PageCheckbox</h2>

          <ion-item>
            <ion-label>Default</ion-label>
            <ion-checkbox checked></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Primary</ion-label>
            <ion-checkbox checked color="primary"></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Secondary</ion-label>
            <ion-checkbox checked color="secondary"></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Tertiary</ion-label>
            <ion-checkbox checked color="tertiary"></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Success</ion-label>
            <ion-checkbox checked color="success"></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Warning</ion-label>
            <ion-checkbox checked color="warning"></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Danger</ion-label>
            <ion-checkbox checked color="danger"></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Light</ion-label>
            <ion-checkbox checked color="light"></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Medium</ion-label>
            <ion-checkbox checked color="medium"></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Dark</ion-label>
            <ion-checkbox checked color="dark"></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Unchecked by Default</ion-label>
            <ion-checkbox></ion-checkbox>
          </ion-item>

          <ion-item>
            <ion-label>Disabled</ion-label>
            <ion-checkbox disabled></ion-checkbox>
          </ion-item>
        </ion-content>
      </div>
    );
  }
}
