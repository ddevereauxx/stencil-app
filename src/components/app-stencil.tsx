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
    interface IonFabButtonAttributes {
      mini?: boolean;
    }
    interface IonHideWhenAttributes {
      mode?: string;
    }
    interface IonIconAttributes {
      small?: boolean;
    }
    interface IonInputAttributes {
      checked?: boolean;
    }
    interface IonLabelAttributes {
      fixed?: boolean;
      stacked?: boolean;
      floating?: boolean;
    }
    interface IonRangeAttributes {
      steps?: number;
    }
    interface IonSegmentAttributes {
      name?: string;
    }
    interface IonSegmentButtonAttributes {
      name?: string;
    }
    interface IonShowWhenAttributes {
      mode?: string;
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
              <ion-item button onClick={() => this.changePage('searchbar')}>
                Searchbar
              </ion-item>
              <ion-item button onClick={() => this.changePage('segment')}>
                Segment
              </ion-item>
              <ion-item button onClick={() => this.changePage('select')}>
                Select
              </ion-item>
              <ion-item button onClick={() => this.changePage('show-when')}>
                Show When
              </ion-item>
              <ion-item button onClick={() => this.changePage('skeleton-text')}>
                Skeleton Text
              </ion-item>
              <ion-item button onClick={() => this.changePage('slides')}>
                Slides
              </ion-item>
              <ion-item button onClick={() => this.changePage('spinner')}>
                Spinner
              </ion-item>
              <ion-item button onClick={() => this.changePage('split-pane')}>
                Split Pane
              </ion-item>
              <ion-item button onClick={() => this.changePage('status-tap')}>
                Status Tap
              </ion-item>
              <ion-item button onClick={() => this.changePage('tabs')}>
                Tabs
              </ion-item>
              <ion-item button onClick={() => this.changePage('tap-click')}>
                Tap Click
              </ion-item>
              <ion-item button onClick={() => this.changePage('text')}>
                Text
              </ion-item>
              <ion-item button onClick={() => this.changePage('textarea')}>
                Textarea
              </ion-item>
              <ion-item button onClick={() => this.changePage('thumbnail')}>
                Thumbnail
              </ion-item>
              <ion-item button onClick={() => this.changePage('toast')}>
                Toast
              </ion-item>
              <ion-item button onClick={() => this.changePage('toggle')}>
                Toggle
              </ion-item>
              <ion-item button onClick={() => this.changePage('toolbar')}>
                Toolbar
              </ion-item>
              <ion-item button onClick={() => this.changePage('virtual-scroll')}>
                Virtual Scroll
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
              <ion-route url="/searchbar" component="page-searchbar" />
              <ion-route url="/segment" component="page-segment" />
              <ion-route url="/select" component="page-select" />
              <ion-route url="/show-when" component="page-show-when" />
              <ion-route url="/skeleton-text" component="page-skeleton-text" />
              <ion-route url="/slides" component="page-slides" />
              <ion-route url="/spinner" component="page-spinner" />
              <ion-route url="/split-pane" component="page-split-pane" />
              <ion-route url="/status-tap" component="page-status-tap" />
              <ion-route url="/tabs" component="page-tabs" />
              <ion-route url="/tap-click" component="page-tap-click" />
              <ion-route url="/text" component="page-text" />
              <ion-route url="/textarea" component="page-textarea" />
              <ion-route url="/thumbnail" component="page-thumbnail" />
              <ion-route url="/toast" component="page-toast" />
              <ion-route url="/toggle" component="page-toggle" />
              <ion-route url="/toolbar" component="page-toolbar" />
              <ion-route url="/virtual-scroll" component="page-virtual-scroll" />
            </ion-router>
            <ion-nav />
          </ion-content>
        </div>
      </ion-app>,
      <ion-menu-controller />
    ];
  }
}
