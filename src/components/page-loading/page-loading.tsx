import { Component } from '@stencil/core';

@Component({
  tag: 'page-loading',
  styleUrl: 'page-loading.css'
})
export class PageLoading {
  loadingController: any;

  componentDidLoad() {
    this.loadingController = document.querySelector('ion-loading-controller');
  }

  async presentLoading() {
    await this.loadingController.componentOnReady();
    const loadingElement = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    return await loadingElement.present();
  }

  async presentLoadingWithOptions(opts) {
    await this.loadingController.componentOnReady();
    const loadingElement = await this.loadingController.create(opts);
    return await loadingElement.present();
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Loading - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <ion-button id="basic" expand="block" onClick={() => this.presentLoading()}>
            Show Loading
          </ion-button>
          <ion-button
            id="default"
            expand="block"
            onClick={() =>
              this.presentLoadingWithOptions({
                duration: 2000,
                content: 'Please wait...'
              })
            }
          >
            Show Default Loading
          </ion-button>
          <ion-button
            expand="block"
            onClick={() =>
              this.presentLoadingWithOptions({
                duration: 2000,
                content:
                  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.'
              })
            }
          >
            Show Loading with long content
          </ion-button>
          <ion-button
            expand="block"
            onClick={() =>
              this.presentLoadingWithOptions({
                duration: 2000,
                content: 'Please wait...',
                spinner: 'hide'
              })
            }
          >
            Show Loading with no spinner
          </ion-button>
          <ion-button
            expand="block"
            onClick={() =>
              this.presentLoadingWithOptions({
                duration: 5000,
                content: 'Please wait...',
                translucent: true
              })
            }
          >
            Show Loading with translucent
          </ion-button>
          <ion-button
            expand="block"
            onClick={() =>
              this.presentLoadingWithOptions({
                duration: 5000,
                content: 'Please wait...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
              })
            }
          >
            Show Loading with cssClass
          </ion-button>
          <ion-button expand="block" onClick={() => this.presentLoadingWithOptions({ enableBackdropDismiss: true })}>
            Show Backdrop Click Loading
          </ion-button>

          <ion-loading-controller />

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
