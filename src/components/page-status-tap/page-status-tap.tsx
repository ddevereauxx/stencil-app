import { Component } from '@stencil/core';

@Component({
  tag: 'page-status-tap',
  styleUrl: 'page-status-tap.css'
})
export class PageStatusTap {
  componentDidLoad() {
    console.log('Component PageStatusTap was loaded');
  }

  async init() {
    const button = document.querySelector('ion-button');
    await button.componentOnReady();
    button.addEventListener('click', async () => {
      await this.doStatusTap();
    });
  }

  async doStatusTap() {
    const statusTap: any = document.querySelector('ion-status-tap');
    await statusTap.componentOnReady();
    return await statusTap.mockTap();
  }

  render() {
    return (
      <div class="ion-page">
        <ion-status-tap />

        <ion-header>
          <ion-toolbar>
            <ion-title>Status Tap - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <div class="really-big">
            <ion-button class="shawty-got-low">Mock Status Tap</ion-button>
          </div>
        </ion-content>
      </div>
    );
  }
}
