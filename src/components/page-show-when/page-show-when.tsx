import { Component } from '@stencil/core';

@Component({
  tag: 'page-show-when'
})
export class PageShowWhen {
  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Show when - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <h2>Mode Tests</h2>
          <ion-show-when mode="md, ios">
            <div>Shows on MD, iOS</div>
          </ion-show-when>

          <ion-show-when mode="md">
            <div>Shows on MD only</div>
          </ion-show-when>

          <ion-show-when mode="ios">
            <div>Shows on iOS only</div>
          </ion-show-when>

          <h2>Orientation Tests</h2>
          <ion-show-when orientation="portrait">
            <div>Shows on portrait orientation</div>
          </ion-show-when>

          <ion-show-when orientation="landscape">
            <div>Shows on landscape orientation</div>
          </ion-show-when>

          <h2>Platform Tests</h2>

          <ion-show-when platform="android,ios">
            <div>Render on Android and iOS</div>
          </ion-show-when>

          <ion-show-when platform="ios">
            <div>Only render on iOS</div>
          </ion-show-when>

          <ion-show-when platform="android">
            <div>Only render on Android</div>
          </ion-show-when>

          <ion-show-when platform="ipad">
            <div>Only render on ipad</div>
          </ion-show-when>

          <ion-show-when platform="phablet">
            <div>Only render on phablet</div>
          </ion-show-when>

          <ion-show-when platform="iphone">
            <div>Only render on phone</div>
          </ion-show-when>

          <h2>Size Tests</h2>
          <ion-show-when size="xs">
            <div>Only render on xs</div>
          </ion-show-when>

          <ion-show-when size="sm">
            <div>Only render on sm</div>
          </ion-show-when>

          <ion-show-when size="md">
            <div>Only render on md</div>
          </ion-show-when>

          <ion-show-when size="lg">
            <div>Only render on lg</div>
          </ion-show-when>

          <ion-show-when size="xl">
            <div>Only render on xl</div>
          </ion-show-when>

          <ion-show-when size="xs, m">
            <div>Only render on XS or m</div>
          </ion-show-when>
        </ion-content>
      </div>
    );
  }
}
