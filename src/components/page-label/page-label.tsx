import { Component } from '@stencil/core';

@Component({
  tag: 'page-label',
  styleUrl: 'page-label.css'
})
export class PageLabel {
  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Label - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-item>
              <ion-label>Default</ion-label>
              <ion-input />
            </ion-item>
            <ion-item text-wrap>
              <ion-label>Wrap label this label just goes on and on and on</ion-label>
              <ion-input />
            </ion-item>
            <ion-item>
              <ion-label position="fixed">Fixed</ion-label>
              <ion-input />
            </ion-item>
            <ion-item>
              <ion-label position="floating">Floating</ion-label>
              <ion-input />
            </ion-item>
            <ion-item>
              <ion-label position="stacked">Stacked</ion-label>
              <ion-input />
            </ion-item>
          </ion-list>
        </ion-content>
      </div>
    );
  }
}
