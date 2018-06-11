import { Component } from '@stencil/core';

@Component({
  tag: 'page-checkbox'
})
export class PageCheckbox {
  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Checkbox - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-item>
            <ion-label>Default</ion-label>
            <ion-checkbox checked />
          </ion-item>

          <ion-item>
            <ion-label>Primary</ion-label>
            <ion-checkbox checked color="primary" />
          </ion-item>

          <ion-item>
            <ion-label>Secondary</ion-label>
            <ion-checkbox checked color="secondary" />
          </ion-item>

          <ion-item>
            <ion-label>Tertiary</ion-label>
            <ion-checkbox checked color="tertiary" />
          </ion-item>

          <ion-item>
            <ion-label>Success</ion-label>
            <ion-checkbox checked color="success" />
          </ion-item>

          <ion-item>
            <ion-label>Warning</ion-label>
            <ion-checkbox checked color="warning" />
          </ion-item>

          <ion-item>
            <ion-label>Danger</ion-label>
            <ion-checkbox checked color="danger" />
          </ion-item>

          <ion-item>
            <ion-label>Light</ion-label>
            <ion-checkbox checked color="light" />
          </ion-item>

          <ion-item>
            <ion-label>Medium</ion-label>
            <ion-checkbox checked color="medium" />
          </ion-item>

          <ion-item>
            <ion-label>Dark</ion-label>
            <ion-checkbox checked color="dark" />
          </ion-item>

          <ion-item>
            <ion-label>Unchecked by Default</ion-label>
            <ion-checkbox />
          </ion-item>

          <ion-item>
            <ion-label>Disabled</ion-label>
            <ion-checkbox disabled />
          </ion-item>
        </ion-content>
      </div>
    );
  }
}
