import { Component } from '@stencil/core';


@Component({
  tag: 'page-label',
  styleUrl: 'page-label.css'
})
export class PageLabel {
  componentDidLoad() {
    console.log('Component PageLabel was loaded');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content padding>
          <h2>PageLabel</h2>

          <ion-list>
            <ion-item>
              <ion-label>Default</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item text-wrap>
              <ion-label>Wrap label this label just goes on and on and on</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Fixed</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Floating</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>Stacked</ion-label>
              <ion-input></ion-input>
            </ion-item>
          </ion-list>
        </ion-content>
      </div>
    );
  }
}
