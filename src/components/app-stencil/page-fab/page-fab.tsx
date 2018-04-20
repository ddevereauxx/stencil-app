import { Component } from '@stencil/core';


@Component({
  tag: 'page-fab',
  styleUrl: 'page-fab.scss'
})
export class PageFab {
  componentDidLoad() {
    console.log('Component PageFab was loaded');
  }

  insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }

  insertLog(message) {
    console.log(message);
    var el = document.querySelector('#log');
    const oldHTML = el.innerHTML;
    el.innerHTML = oldHTML + '\n' + message;
  }

  add() {
    var newEle = document.createElement('f');
    var ref = document.querySelector('f');
    this.insertAfter(newEle, ref);
    this.insertLog('add');
  }

  clickMainFAB(container) {
    container = container;
    let message = 'Clicked open social menu';
    this.insertLog(message);
  }

  openSocial(network, container) {
    container = container;
    let message = 'Share in ' + network;
    this.insertLog(message);
  }

  closeLists() {
    var fabs = document.querySelectorAll('ion-fab');

    for (var i = 0; i < fabs.length; i++) {
      fabs[i].activated = false;
    }
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content padding>
          <h2>PageFab</h2>

          <f></f>
          <f></f>

          <pre id="log" style={{right:'10px', bottom:'50px', textShadow: '0 0 2px rgba(0, 0, 0, 0.24)'}} slot="fixed">log</pre>
          <ion-button>Test</ion-button>
          <ion-fab-button>FAB</ion-fab-button>

          <ion-fab vertical="top" horizontal="end" edge id="fab1" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab1')} class="e2eFabTopRight"><ion-icon name="add"></ion-icon></ion-fab-button>
            <ion-fab-list>
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab1')}><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab1')}><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab1')}><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab1')}><ion-icon name="logo-googleplus"></ion-icon></ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab vertical="bottom" horizontal="end" edge id="fab2" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab2')} color="dark" class="e2eFabBottomRight"><ion-icon name="arrow-dropleft"></ion-icon></ion-fab-button>
            <ion-fab-list side="start">
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab2')}><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab2')}><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab2')}><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab2')}><ion-icon name="logo-googleplus"></ion-icon></ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab vertical="top" horizontal="start" id="fab3" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab3')} color="secondary" class="e2eFabTopLeft"><ion-icon name="arrow-dropright"></ion-icon></ion-fab-button>
            <ion-fab-list side="end">
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab3')}><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab3')}><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab3')}><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab3')}><ion-icon name="logo-googleplus"></ion-icon></ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab vertical="bottom" horizontal="start" id="fab4" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab4')} color="light" class="e2eFabBottomLeft"><ion-icon name="arrow-dropup"></ion-icon></ion-fab-button>
            <ion-fab-list side="top">
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab4')}><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab4')}><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab4')}><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab4')}><ion-icon name="logo-googleplus"></ion-icon></ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab vertical="center" horizontal="center" id="fab5" slot="fixed">
            <ion-fab-button onClick={() => this.clickMainFAB('fab5')} class="e2eFabCenter"><ion-icon name="md-share"></ion-icon></ion-fab-button>
            <ion-fab-list side="top">
              <ion-fab-button onClick={() => this.openSocial('vimeo', 'fab5')} color="primary"><ion-icon name="logo-vimeo"></ion-icon></ion-fab-button>
            </ion-fab-list>
            <ion-fab-list side="bottom">
              <ion-fab-button onClick={() => this.openSocial('facebook', 'fab5')} color="secondary"><ion-icon name="logo-facebook"></ion-icon></ion-fab-button>
            </ion-fab-list>
            <ion-fab-list side="start">
              <ion-fab-button onClick={() => this.openSocial('googleplus', 'fab5')} color="light"><ion-icon name="logo-googleplus"></ion-icon></ion-fab-button>
            </ion-fab-list>
            <ion-fab-list side="end">
              <ion-fab-button onClick={() => this.openSocial('twitter', 'fab5')} color="dark"><ion-icon name="logo-twitter"></ion-icon></ion-fab-button>
            </ion-fab-list>
          </ion-fab>

          <ion-fab horizontal="end" vertical="center" slot="fixed">
            <ion-fab-button color="danger" onClick={() => this.add()}><ion-icon name="add"></ion-icon></ion-fab-button>
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
