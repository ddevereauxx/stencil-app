import { Component } from '@stencil/core';

@Component({
  tag: 'page-spinner'
})
export class PageSpinner {
  componentDidLoad() {
    console.log('Component PageSpinner was loaded');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Spinner - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-list>
            <ion-list-header>Spinner Loading Indicators</ion-list-header>
            <ion-item>
              <ion-spinner slot="start" />
              Show Default Spinner
            </ion-item>
            <ion-item>
              <ion-spinner slot="start" name="lines" />
              Show Lines
            </ion-item>
            <ion-item>
              <ion-spinner slot="start" name="lines-small" />
              Show Lines Small
            </ion-item>
            <ion-item>
              <ion-spinner slot="start" name="dots" />
              Show Dots
            </ion-item>
            <ion-item>
              <ion-spinner slot="start" name="bubbles" />
              Show Bubbles
            </ion-item>
            <ion-item>
              <ion-spinner slot="start" name="circles" />
              Show Circles
            </ion-item>
            <ion-item>
              <ion-spinner slot="start" name="crescent" />
              Show Crescent
            </ion-item>
            <ion-item>
              <ion-spinner slot="start" paused />
              Show Paused Default Spinner
            </ion-item>
          </ion-list>
        </ion-content>
      </div>
    );
  }
}
