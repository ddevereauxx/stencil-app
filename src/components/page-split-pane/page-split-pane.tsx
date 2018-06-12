import { Component } from '@stencil/core';

@Component({
  tag: 'page-split-pane',
  styleUrl: 'page-split-pane.css'
})
export class PageSplitPane {
  menuCtrl: any;

  componentDidLoad() {
    this.menuCtrl = document.querySelector('ion-menu-controller#menu2');
  }

  openStart() {
    console.log('Open start menu');
    this.menuCtrl.open('start');
  }

  push() {
    console.log('Push page');
  }

  menu() {
    console.log('Disable/enable menu');
    this.menuCtrl.enable(!this.menuCtrl.isEnabled());
  }

  render() {
    return (
      <div class="ion-page">
        <ion-split-pane id="splitPane">
          <ion-menu side="start">
            <ion-header>
              <ion-toolbar color="secondary">
                <ion-title>Left Menu</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content>
              <ion-list>
                <ion-item>Open end Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
              </ion-list>
            </ion-content>

            <ion-footer>
              <ion-toolbar color="secondary">
                <ion-title>Footer</ion-title>
              </ion-toolbar>
            </ion-footer>
          </ion-menu>
          <div class="ion-page" main>
            <ion-header>
              <ion-toolbar>
                <ion-buttons slot="start">
                  <ion-menu-toggle>
                    <ion-button>
                      <ion-icon slot="icon-only" name="menu" />
                    </ion-button>
                  </ion-menu-toggle>
                </ion-buttons>

                <ion-title>Navigation</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content padding>
              <h1>Page 1</h1>
              <ion-button onClick={() => this.push()}>Push</ion-button>
              <ion-button onClick={() => this.menu()}>Disable/enable menu</ion-button>
              <f />
              <f />
              <f />
              <f />
            </ion-content>
          </div>
        </ion-split-pane>
        <ion-menu-controller id="menu2" />
      </div>
    );
  }
}
