import { Component } from '@stencil/core';

@Component({
  tag: 'page-fab',
  styleUrl: 'page-fab.css'
})
export class PageFab {
  el: any;
  fabs: any;

  componentDidLoad() {
    this.el = document.querySelector('#log');
    this.fabs = document.querySelectorAll('ion-fab');
  }

  insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }

  insertLog(message) {
    console.log(message);
    const oldHTML = this.el.innerHTML;
    this.el.innerHTML = oldHTML + '\n' + message;
  }

  add() {
    let newEle = document.createElement('f');
    let ref = document.querySelector('f');
    this.insertAfter(newEle, ref);
    this.insertLog('add');
  }

  clickMainFAB(container) {
    container;
    let message = 'Clicked open social menu';
    this.insertLog(message);
  }

  openSocial(network, container) {
    container;
    let message = 'Share in ' + network;
    this.insertLog(message);
  }

  closeLists() {
    for (let i = 0; i < this.fabs.length; i++) {
      this.fabs[i].activated = false;
    }
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Floating Action Button - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" padding fullscreen>
          <f />
          <f />

          <pre
            id="log"
            style={{
              right: '10px',
              bottom: '50px',
              'text-shadow': '0 0 2px rgba(0, 0, 0, 0.24)'
            }}
            slot="fixed"
          >
            log
          </pre>
          <ion-button>Test</ion-button>
          <ion-fab-button>FAB</ion-fab-button>

          <ion-fab vertical="top" horizontal="end" edge id="fab1" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab1')} mini class="e2eFabTopRight">
              <ion-icon name="add" />
            </ion-fab-button>
            <ion-fab-list>
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab1')}>
                <ion-icon name="logo-facebook" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab1')}>
                <ion-icon name="logo-twitter" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab1')}>
                <ion-icon name="logo-vimeo" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab1')}>
                <ion-icon name="logo-googleplus" />
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab vertical="bottom" horizontal="end" edge id="fab2" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab2')} color="dark" class="e2eFabBottomRight">
              <ion-icon name="arrow-dropleft" />
            </ion-fab-button>
            <ion-fab-list side="start">
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab2')}>
                <ion-icon name="logo-facebook" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab2')}>
                <ion-icon name="logo-twitter" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab2')}>
                <ion-icon name="logo-vimeo" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab2')}>
                <ion-icon name="logo-googleplus" />
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab vertical="top" horizontal="start" id="fab3" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab3')} color="secondary" class="e2eFabTopLeft">
              <ion-icon name="arrow-dropright" />
            </ion-fab-button>
            <ion-fab-list side="end">
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab3')}>
                <ion-icon name="logo-facebook" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab3')}>
                <ion-icon name="logo-twitter" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab3')}>
                <ion-icon name="logo-vimeo" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab3')}>
                <ion-icon name="logo-googleplus" />
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab vertical="bottom" horizontal="start" id="fab4" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab4')} color="light" class="e2eFabBottomLeft">
              <ion-icon name="arrow-dropup" />
            </ion-fab-button>
            <ion-fab-list side="top">
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab4')}>
                <ion-icon name="logo-facebook" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab4')}>
                <ion-icon name="logo-twitter" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab4')}>
                <ion-icon name="logo-vimeo" />
              </ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab4')}>
                <ion-icon name="logo-googleplus" />
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab vertical="center" horizontal="center" id="fab5" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab5')} class="e2eFabCenter">
              <ion-icon name="md-share" />
            </ion-fab-button>
            <ion-fab-list side="top">
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab5')} color="primary">
                <ion-icon name="logo-vimeo" />
              </ion-fab-button>
            </ion-fab-list>
            <ion-fab-list side="bottom">
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab5')} color="secondary">
                <ion-icon name="logo-facebook" />
              </ion-fab-button>
            </ion-fab-list>
            <ion-fab-list side="start">
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab5')} color="light">
                <ion-icon name="logo-googleplus" />
              </ion-fab-button>
            </ion-fab-list>
            <ion-fab-list side="end">
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab5')} color="dark">
                <ion-icon name="logo-twitter" />
              </ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab horizontal="end" vertical="center" slot="fixed">
            <ion-fab-button color="danger" onClick={() => this.add()}>
              <ion-icon name="add" />
            </ion-fab-button>
          </ion-fab>
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            <ion-buttons slot="secondary">
              <ion-button onClick={() => this.closeLists()}>Close</ion-button>
            </ion-buttons>
            <ion-title>Footer</ion-title>
          </ion-toolbar>
        </ion-footer>
      </div>
    );
  }
}
