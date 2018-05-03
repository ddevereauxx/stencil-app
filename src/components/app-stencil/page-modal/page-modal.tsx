import { Component } from '@stencil/core';


@Component({
  tag: 'page-modal',
  styleUrl: 'page-modal.css'
})
export class PageModal {
  modalController: any;

  componentDidLoad() {
    this.modalController = document.querySelector('ion-modal-controller');

    window.addEventListener("ionModalDidDismiss", function(e){console.log('DidDismiss', e)});
    window.addEventListener("ionModalWillDismiss", function(e){console.log('WillDismiss', e)});
  }

  async presentModal() {

    // initialize controller
    await this.modalController.componentOnReady();

    // create component to open
    const element = document.createElement('div');
    element.innerHTML = `
    <ion-header>
      <ion-toolbar>
        <ion-title>Super Modal</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1>Content of doom</h1>
      <div>Here's some more content</div>
      <ion-button class="dismiss">Dismiss Modal</ion-button>
    </ion-content>
    `;

    // listen for close event
    const button = element.querySelector('ion-button');
    button.addEventListener('click', () => {
      this.modalController.dismiss();
    });

    // present the modal
    const modalElement = await this.modalController.create({
      component: element
    });
    modalElement.present();
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content padding>
          <h2>PageModal</h2>

          <ion-modal-controller></ion-modal-controller>
          <p>
            <ion-button id="presentModal" class="e2ePresentModal" onClick={() => this.presentModal()}>Present modal</ion-button>
          </p>
        </ion-content>
      </div>
    );
  }
}
