import { Component } from '@stencil/core';
import '@ionic/core';

import './page-action-sheet/page-action-sheet';
import './page-alert/page-alert';
import './page-avatar/page-avatar';
import './page-badge/page-badge';
import './page-button/page-button';
import './page-card/page-card';


@Component({
  tag: 'app-stencil',
  styleUrl: 'app-stencil.scss'
})
export class AppStencil {
  menu: any;

  componentDidLoad() {
    this.menu = document.querySelector('ion-menu-controller');
  }

  changePage(page) {
    location.hash = page;
    this.menu.close();
  }

  render() {
    return [
      <ion-app>
        <ion-menu side="start">
          <ion-header>
            <ion-toolbar color="secondary">
              <ion-title>Menu</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content>
            <ion-list>
              <ion-item button onClick={() => this.changePage('action-sheet')}>Action Sheet</ion-item>
              <ion-item button onClick={() => this.changePage('alert')}>Alert</ion-item>
              <ion-item button onClick={() => this.changePage('avatar')}>Avatar</ion-item>
              <ion-item button onClick={() => this.changePage('badge')}>Badge</ion-item>
              <ion-item button onClick={() => this.changePage('button')}>Button</ion-item>
              <ion-item button onClick={() => this.changePage('card')}>Card</ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>

        <div class="ion-page" main>
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button onClick={() => this.menu.open('start')}>
                  <ion-icon slot="icon-only" name="menu"></ion-icon>
                </ion-button>
              </ion-buttons>
              <ion-title>Stencil App</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content padding>
            <ion-router>
              <ion-route url="/action-sheet" component="page-action-sheet"></ion-route>
              <ion-route url="/alert" component="page-alert"></ion-route>
              <ion-route url="/avatar" component="page-avatar"></ion-route>
              <ion-route url="/badge" component="page-badge"></ion-route>
              <ion-route url="/button" component="page-button"></ion-route>
              <ion-route url="/card" component="page-card"></ion-route>
            </ion-router>
            <ion-nav></ion-nav>
          </ion-content>
        </div>
      </ion-app>,
      <ion-menu-controller></ion-menu-controller>
    ];
  }
}
