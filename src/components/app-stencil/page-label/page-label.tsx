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
        <ion-header>
          <ion-toolbar>
            <ion-title>Label - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-list>
            <ion-item>
              <ion-label>Default</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item text-wrap={true}>
              <ion-label>Wrap label this label just goes on and on and on</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label> fixed={true}Fixed</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label> floating={true}Floating</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item>
              <ion-label> stacked={true}Stacked</ion-label>
              <ion-input></ion-input>
            </ion-item>
          </ion-list>
        </ion-content>
      </div>
    );
  }
}
