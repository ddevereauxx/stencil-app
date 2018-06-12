import { Component } from '@stencil/core';

@Component({
  tag: 'page-toast',
  styleUrl: 'page-toast.css'
})
export class PageToast {
  componentDidLoad() {
    window.addEventListener('ionToastDidDismiss', e => {
      console.log('didDismiss', e);
    });
    window.addEventListener('ionToastWillDismiss', e => {
      console.log('willDismiss', e);
    });
  }

  async presentToast(position) {
    const toastController = document.querySelector('ion-toast-controller');
    await toastController.componentOnReady();
    const toastElement = await toastController.create({
      message: 'Hellooo',
      position,
      duration: 2000
    });
    return await toastElement.present();
  }

  async presentToastWithOptions(opts) {
    const toastController = document.querySelector('ion-toast-controller');
    await toastController.componentOnReady();
    const toastElement = await toastController.create(opts);
    return await toastElement.present();
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Toast - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" padding>
          <ion-button expand="block" id="showBottomToast" onClick={() => this.presentToast('bottom')}>
            Show Toast Bottom
          </ion-button>
          <ion-button expand="block" onClick={() => this.presentToast('top')}>
            Show Toast Top
          </ion-button>
          <ion-button expand="block" onClick={() => this.presentToast('middle')}>
            Show Toast Middle
          </ion-button>
          <ion-button
            expand="block"
            onClick={() =>
              this.presentToastWithOptions({
                message:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
                duration: 2000
              })
            }
          >
            Show Toast with long message
          </ion-button>
          <ion-button expand="block" onClick={() => this.presentToastWithOptions({ message: 'click to close', showCloseButton: true })}>
            Show Toast with Close Button
          </ion-button>
          <ion-button expand="block" onClick={() => this.presentToastWithOptions({ message: 'click to close', showCloseButton: true, closeButtonText: 'closing time' })}>
            Show Toast with Custom Close Button Text
          </ion-button>
          <ion-button expand="block" onClick={() => this.presentToastWithOptions({ message: 'click to close', showCloseButton: true, translucent: true })}>
            Show Translucent Toast
          </ion-button>

          <ion-toast-controller />

          <ion-grid>
            <ion-row>
              <ion-col col-6>
                <f class="red" />
              </ion-col>
              <ion-col col-6>
                <f class="green" />
              </ion-col>
              <ion-col col-6>
                <f class="blue" />
              </ion-col>
              <ion-col col-6>
                <f class="yellow" />
              </ion-col>
              <ion-col col-6>
                <f class="pink" />
              </ion-col>
              <ion-col col-6>
                <f class="purple" />
              </ion-col>
              <ion-col col-6>
                <f class="black" />
              </ion-col>
              <ion-col col-6>
                <f class="orange" />
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </div>
    );
  }
}
