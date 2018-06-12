import { Component } from '@stencil/core';
import '@ionic/core';

declare global {
  namespace JSXElements {
    interface HTMLAttributes {
      type?: string;
      value?: any;
    }
    interface IonButtonAttributes {
      block?: boolean;
    }
    interface IonIconAttributes {
      small?: boolean;
    }
    interface IonInputAttributes {
      checked?: boolean;
    }
    interface IonFabButtonAttributes {
      mini?: boolean;
    }
    interface IonHideWhenAttributes {
      mode?: string;
    }
    interface IonRangeAttributes {
      steps?: number;
    }
  }
}

@Component({
  tag: 'app-stencil',
  styleUrl: 'app-stencil.css'
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
              <ion-item button onClick={() => this.changePage('action-sheet')}>
                Action Sheet
              </ion-item>
              <ion-item button onClick={() => this.changePage('alert')}>
                Alert
              </ion-item>
              <ion-item button onClick={() => this.changePage('avatar')}>
                Avatar
              </ion-item>
              <ion-item button onClick={() => this.changePage('badge')}>
                Badge
              </ion-item>
              <ion-item button onClick={() => this.changePage('button')}>
                Button
              </ion-item>
              <ion-item button onClick={() => this.changePage('card')}>
                Card
              </ion-item>
              <ion-item button onClick={() => this.changePage('checkbox')}>
                Checkbox
              </ion-item>
              <ion-item button onClick={() => this.changePage('chip')}>
                Chip
              </ion-item>
              <ion-item button onClick={() => this.changePage('content')}>
                Content
              </ion-item>
              <ion-item button onClick={() => this.changePage('datetime')}>
                Datetime
              </ion-item>
              <ion-item button onClick={() => this.changePage('fab')}>
                Fab
              </ion-item>
              <ion-item button onClick={() => this.changePage('grid')}>
                Grid
              </ion-item>
              <ion-item button onClick={() => this.changePage('hide-when')}>
                Hide When
              </ion-item>
              <ion-item button onClick={() => this.changePage('icon')}>
                Icon
              </ion-item>
              <ion-item button onClick={() => this.changePage('img')}>
                Img
              </ion-item>
              <ion-item button onClick={() => this.changePage('infinite-scroll')}>
                Infinite Scroll
              </ion-item>
              <ion-item button onClick={() => this.changePage('input')}>
                Input
              </ion-item>
              <ion-item button onClick={() => this.changePage('item')}>
                Item
              </ion-item>
              <ion-item button onClick={() => this.changePage('item-sliding')}>
                Item Sliding
              </ion-item>
              <ion-item button onClick={() => this.changePage('label')}>
                Label
              </ion-item>
              <ion-item button onClick={() => this.changePage('list')}>
                List
              </ion-item>
              <ion-item button onClick={() => this.changePage('loading')}>
                Loading
              </ion-item>
              <ion-item button onClick={() => this.changePage('modal')}>
                Modal
              </ion-item>
              <ion-item button onClick={() => this.changePage('note')}>
                Note
              </ion-item>
              <ion-item button onClick={() => this.changePage('popover')}>
                Popover
              </ion-item>
              <ion-item button onClick={() => this.changePage('radio')}>
                Radio
              </ion-item>
              <ion-item button onClick={() => this.changePage('radio-group')}>
                Radio Group
              </ion-item>
              <ion-item button onClick={() => this.changePage('range')}>
                Range
              </ion-item>
              <ion-item button onClick={() => this.changePage('refresher')}>
                Refresher
              </ion-item>
              <ion-item button onClick={() => this.changePage('reorder')}>
                Reorder
              </ion-item>
              <ion-item button onClick={() => this.changePage('ripple-effect')}>
                Ripple Effect
              </ion-item>
            </ion-list>
          </ion-content>
        </ion-menu>

        <div class="ion-page" main>
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button onClick={() => this.menu.open('start')}>
                  <ion-icon slot="icon-only" name="menu" />
                </ion-button>
              </ion-buttons>
              <ion-title>Stencil App</ion-title>
            </ion-toolbar>
          </ion-header>

          <ion-content padding>
            <ion-router>
              <ion-route url="/action-sheet" component="page-action-sheet" />
              <ion-route url="/alert" component="page-alert" />
              <ion-route url="/avatar" component="page-avatar" />
              <ion-route url="/badge" component="page-badge" />
              <ion-route url="/button" component="page-button" />
              <ion-route url="/card" component="page-card" />
              <ion-route url="/checkbox" component="page-checkbox" />
              <ion-route url="/chip" component="page-chip" />
              <ion-route url="/content" component="page-content" />
              <ion-route url="/datetime" component="page-datetime" />
              <ion-route url="/fab" component="page-fab" />
              <ion-route url="/grid" component="page-grid" />
              <ion-route url="/hide-when" component="page-hide-when" />
              <ion-route url="/icon" component="page-icon" />
              <ion-route url="/img" component="page-img" />
              <ion-route url="/infinite-scroll" component="page-infinite-scroll" />
              <ion-route url="/input" component="page-input" />
              <ion-route url="/item" component="page-item" />
              <ion-route url="/item-sliding" component="page-item-sliding" />
              <ion-route url="/label" component="page-label" />
              <ion-route url="/list" component="page-list" />
              <ion-route url="/loading" component="page-loading" />
              <ion-route url="/modal" component="page-modal" />
              <ion-route url="/note" component="page-note" />
              <ion-route url="/popover" component="page-popover" />
              <ion-route url="/radio" component="page-radio" />
              <ion-route url="/radio-group" component="page-radio-group" />
              <ion-route url="/range" component="page-range" />
              <ion-route url="/refresher" component="page-refresher" />
              <ion-route url="/reorder" component="page-reorder" />
              <ion-route url="/ripple-effect" component="page-ripple-effect" />
            </ion-router>
            <ion-nav />
          </ion-content>
        </div>
      </ion-app>,
      <ion-menu-controller />
    ];
  }
}
