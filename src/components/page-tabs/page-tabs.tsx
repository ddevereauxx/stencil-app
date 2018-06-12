import { Component } from '@stencil/core';

@Component({
  tag: 'page-tabs'
})
export class PageTabs {
  render() {
    return (
      <div class="ion-page">
        <ion-tabs>
          <ion-tab label="Plain List" icon="star">
            <ion-header>
              <ion-toolbar>
                <ion-title>Tab One</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content padding>Tab One</ion-content>
          </ion-tab>

          <ion-tab label="Schedule" icon="globe">
            <ion-header>
              <ion-toolbar>
                <ion-title>Tab Two</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content padding>Tab Two</ion-content>
          </ion-tab>

          <ion-tab label="Stopwatch" icon="logo-facebook">
            <ion-header>
              <ion-toolbar>
                <ion-title>Tab Three</ion-title>
              </ion-toolbar>
            </ion-header>
            <ion-content padding>Tab Three</ion-content>
          </ion-tab>

          <ion-tab disabled label="Messages" icon="chatboxes" component="page-one" />
        </ion-tabs>
      </div>
    );
  }
}
