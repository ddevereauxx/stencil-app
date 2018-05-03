import { Component } from '@stencil/core';


@Component({
  tag: 'page-popover',
  styleUrl: 'page-popover.css'
})
export class PagePopover {
  componentDidLoad() {
    // window.addEventListener('ionPopoverDidDismiss', function(e){console.log('didDismiss', e)})
    // window.addEventListener('ionPopoverWillDismiss', function(e){console.log('willDismiss', e)})
    class ProfilePage extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.innerHTML = `
          <ion-content>
            <ion-list>
              <ion-list-header>Ionic</ion-list-header>
              <ion-item><ion-label>Item 0</ion-label></ion-item>
              <ion-item><ion-label>Item 1</ion-label></ion-item>
              <ion-item><ion-label>Item 2</ion-label></ion-item>
              <ion-item><ion-label>Item 3</ion-label></ion-item>
            </ion-list>
          </ion-content>
        `;
      }
    }

    class ListPage extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        let items = '';
        for (var i = 0; i < 30; i++) {
          items += '<ion-item><ion-label>Item ' + i + '</ion-label></ion-item>';
        }

        this.innerHTML = `
          <ion-content>
            <ion-list>
              <ion-list-header>Ionic</ion-list-header>
              ` + items + `
            </ion-list>
          </ion-content>
        `;
      }
    }

    class TranslucentPage extends HTMLElement {
      constructor() {
        super();
      }

      connectedCallback() {
        this.innerHTML = `
          <div padding>
            <h1>Translucent Popover</h1>
          </div>
        `;
      }
    }

    customElements.define('profile-page', ProfilePage);
    customElements.define('list-page', ListPage);
    customElements.define('translucent-page', TranslucentPage);
  }

  async presentPopover(opts) {
    const popoverController = document.querySelector('ion-popover-controller');
    await popoverController.componentOnReady();
    const popoverElement = await popoverController.create(opts);
    return await popoverElement.present();
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="secondary">
              <ion-button onClick={() => this.presentPopover({component: 'profile-page', ev: event })}>
                <ion-icon slot="icon-only" name="person"></ion-icon>
              </ion-button>
            </ion-buttons>
            <ion-title>Popover - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" padding>
          <ion-button class="e2eShowPopover" expand="block" onClick={() => this.presentPopover({ component: 'profile-page', ev: event })}>Show Popover</ion-button>
          <ion-button expand="block" onClick={() => this.presentPopover({ component: 'translucent-page', ev: event, translucent: true })}>Show Translucent Popover</ion-button>
          <ion-button expand="block" color="secondary" onClick={() => this.presentPopover({ component: 'list-page', ev: event })}>Show Long List Popover</ion-button>
          <ion-button expand="block" color="danger" onClick={() => this.presentPopover({ component: 'profile-page' })}>No Event Popover</ion-button>

          <ion-popover-controller></ion-popover-controller>
        </ion-content>

        <ion-footer>
          <ion-toolbar color="primary">
            <ion-buttons slot="primary">
              <ion-button onClick={() => this.presentPopover({component: 'profile-page', ev: event })}>
                <ion-icon slot="icon-only" name="person"></ion-icon>
              </ion-button>
            </ion-buttons>
            <ion-title>Popover</ion-title>
          </ion-toolbar>
        </ion-footer>
      </div>
    );
  }
}
