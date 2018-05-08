import { Component } from '@stencil/core';


@Component({
  tag: 'page-action-sheet',
  styleUrl: 'page-action-sheet.css'
})
export class PageActionSheet {
  actionSheetController: any;

  componentDidLoad() {
    this.actionSheetController = document.querySelector('ion-action-sheet-controller');
  }

  async presentBasic() {
    const mode = 'md';

    await this.actionSheetController.componentOnReady();
    const actionSheetElement = await this.actionSheetController.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: mode === 'md' ? 'heart' : null,
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: mode === 'md' ? 'close' : null,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheetElement.present();
  }

  async presentIcons() {
    await this.actionSheetController.componentOnReady();
    const actionSheetElement = await this.actionSheetController.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        role: 'selected',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    })
    await actionSheetElement.present();
  }

  async presentNoBackdropDismiss() {
    await this.actionSheetController.componentOnReady();
    const actionSheetElement = await this.actionSheetController.create({
      enableBackdropDismiss: false,
      buttons: [{
        text: 'Archive',
        handler: () => {
          console.log('Archive clicked');
        }
      }, {
        text: 'Destructive',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheetElement.present();
  }

  async presentAlert() {
    await this.actionSheetController.componentOnReady();
    const actionSheetElement = await this.actionSheetController.create({
      buttons: [{
        text: 'Open Alert',
        handler: () => {
          console.log('Open Alert clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheetElement.present();
  }

  async presentScroll() {
    await this.actionSheetController.componentOnReady();
    const actionSheetElement = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Add Reaction',
          handler: () => {
            console.log('Add Reaction clicked');
          }
        }, {
          text: 'Copy Text',
          handler: () => {
            console.log('Copy Text clicked');
          }
        }, {
          text: 'Share Text',
          handler: () => {
            console.log('Share Text clicked');
          }
        }, {
          text: 'Copy Link to Message',
          handler: () => {
            console.log('Copy Link to Message clicked');
          }
        }, {
          text: 'Remind Me',
          handler: () => {
            console.log('Remind Me clicked');
          }
        }, {
          text: 'Pin File',
          handler: () => {
            console.log('Pin File clicked');
          }
        }, {
          text: 'Star File',
          handler: () => {
            console.log('Star File clicked');
          }
        }, {
          text: 'Mark Unread',
          handler: () => {
            console.log('Mark Unread clicked');
          }
        }, {
          text: 'Edit Title',
          handler: () => {
            console.log('Edit Title clicked');
          }
        }, {
          text: 'Save Image',
          handler: () => {
            console.log('Save Image clicked');
          }
        }, {
          text: 'Copy Image',
          handler: () => {
            console.log('Copy Image clicked');
          }
        }, {
          text: 'Delete File',
          role: 'destructive',
          handler: () => {
            console.log('Delete File clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheetElement.present();
  }

  async presentScrollNoCancel() {
    await this.actionSheetController.componentOnReady();
    const actionSheetElement = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Add Reaction',
          handler: () => {
            console.log('Add Reaction clicked');
          }
        }, {
          text: 'Copy Text',
          handler: () => {
            console.log('Copy Text clicked');
          }
        }, {
          text: 'Share Text',
          handler: () => {
            console.log('Share Text clicked');
          }
        }, {
          text: 'Copy Link to Message',
          handler: () => {
            console.log('Copy Link to Message clicked');
          }
        }, {
          text: 'Remind Me',
          handler: () => {
            console.log('Remind Me clicked');
          }
        }, {
          text: 'Pin File',
          handler: () => {
            console.log('Pin File clicked');
          }
        }, {
          text: 'Star File',
          handler: () => {
            console.log('Star File clicked');
          }
        }, {
          text: 'Mark Unread',
          handler: () => {
            console.log('Mark Unread clicked');
          }
        }, {
          text: 'Edit Title',
          handler: () => {
            console.log('Edit Title clicked');
          }
        }, {
          text: 'Save Image',
          handler: () => {
            console.log('Save Image clicked');
          }
        }, {
          text: 'Copy Image',
          handler: () => {
            console.log('Copy Image clicked');
          }
        }, {
          text: 'Delete File',
          role: 'destructive',
          handler: () => {
            console.log('Delete File clicked');
          }
        }
      ]
    });
    await actionSheetElement.present();
  }

  async presentCancelOnly() {
    await this.actionSheetController.componentOnReady();
    const actionSheetElement = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheetElement.present();
  }

  async presentWithCssClass() {
    await this.actionSheetController.componentOnReady();
    const actionSheetElement = await this.actionSheetController.create({
      header: "Custom Css Class",
      cssClass: "my-class my-custom-class",
      buttons: [
        {
          text: 'Test',
          role: 'test',
          cssClass: 'my-cancel-button my-custom-button customClass',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheetElement.present();
  }

  render() {
    return (
      <div class="ion-page" main>
        <ion-header>
          <ion-toolbar>
            <ion-title>Action Sheet - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <ion-action-sheet-controller></ion-action-sheet-controller>

          <ion-button expand="block" id="basic" onClick={() => this.presentBasic()}>Basic</ion-button>
          <ion-button expand="block" id="noBackdropDismiss" onClick={() => this.presentNoBackdropDismiss()}>No Backdrop Dismiss</ion-button>
          <ion-button expand="block" id="alertFromActionSheet" onClick={() => this.presentAlert()}>Alert from Action Sheet</ion-button>
          <ion-button expand="block" id="scrollableOptions" onClick={() => this.presentScroll()}>Scrollable Options</ion-button>
          <ion-button expand="block" id="scrollWithoutCancel" onClick={() => this.presentScrollNoCancel()}>Scroll Without Cancel</ion-button>
          <ion-button expand="block" id="cancelOnly" onClick={() => this.presentCancelOnly()}>Cancel Only</ion-button>
          <ion-button expand="block" id="icons" onClick={() => this.presentIcons()}>Icons</ion-button>
          <ion-button expand="block" id="cssClass" onClick={() => this.presentWithCssClass()}>Custom CSS Class</ion-button>

        </ion-content>
      </div>
    );
  }
}
