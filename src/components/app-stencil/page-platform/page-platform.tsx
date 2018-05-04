import { Component } from '@stencil/core';


@Component({
  tag: 'page-platform',
  styleUrl: 'page-platform.css'
})
export class PagePlatform {
  platform: any;

  componentDidLoad() {
    this.platform = document.querySelector('ion-platform');

    this.initialize();
  }

  async initialize() {
    await this.platform.componentOnReady();

    const platforms = this.platform.platforms();
    const platformListElement = document.querySelector('.platform-name-list');
    platforms.forEach(platform => {
      const element = document.createElement('li');
      element.textContent = platform;
      platformListElement.appendChild(element);
    });

    const platformVersionList = document.querySelector('.platform-version-list');
    const versions = this.platform.versions();
    versions.forEach(version => {
      const element = document.createElement('li');
      element.textContent = JSON.stringify(version);
      platformVersionList.appendChild(element);
    });

    const orientationText = this.platform.isPortrait() ? 'portrait' : 'landscape';
    document.querySelector('.orientation').textContent = orientationText;


    const readyElement = document.querySelector('.ready');
    readyElement.textContent = 'No';

    // use artificial timeout to see the visual
    setTimeout(() => {
      this.platform.ready().then(() => {
        readyElement.textContent = 'Yes';
      });
    }, 1000);

  }

  render() {
    return [
      <ion-platform></ion-platform>,
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Platform - basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <h2>The Platforms are:</h2>
          <ul class="platform-name-list"></ul>

          <h2>The Platforms versions are:</h2>
          <ul class="platform-version-list"></ul>

          <h2>The orientation is <span class="orientation"></span></h2>

          <h2>The ready event has fired: <span class="ready"></span></h2>
        </ion-content>
      </div>
    ];
  }
}
