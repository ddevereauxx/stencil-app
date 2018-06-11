import { Component } from '@stencil/core';

@Component({
  tag: 'page-chip'
})
export class PageChip {
  del(chip) {
    console.log('called del', chip);
    let delChip = document.getElementById(chip);
    delChip.parentNode.removeChild(delChip);
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Chip - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" padding style={{ 'text-align': 'center' }}>
          <h2>Text Chips</h2>

          <ion-chip>
            <ion-label>Default</ion-label>
          </ion-chip>

          <ion-chip>
            <ion-label color="secondary">Secondary Label</ion-label>
          </ion-chip>

          <ion-chip>
            <ion-label>Another With Longer Text</ion-label>
          </ion-chip>

          <h2>Color Chips</h2>

          <ion-chip color="primary">
            <ion-icon name="heart" color="dark" />
            <ion-label>Primary</ion-label>
          </ion-chip>

          <ion-chip color="secondary">
            <ion-label color="dark">Secondary w/ Dark label</ion-label>
          </ion-chip>

          <ion-chip color="danger">
            <ion-label>Danger</ion-label>
          </ion-chip>

          <h2>Icon Chips</h2>

          <ion-chip>
            <ion-icon name="pin" />
            <ion-label>Default</ion-label>
          </ion-chip>

          <ion-chip>
            <ion-label>Secondary</ion-label>
            <ion-icon name="pin" color="secondary" />
          </ion-chip>

          <h2>Avatar Chips</h2>

          <ion-chip>
            <ion-avatar>
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
            </ion-avatar>
            <ion-label>Default</ion-label>
          </ion-chip>

          <ion-chip>
            <ion-label>Right Avatar</ion-label>
            <ion-avatar>
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
            </ion-avatar>
          </ion-chip>

          <h2>Delete Chips</h2>

          <ion-chip id="chip1">
            <ion-label>Default</ion-label>
            <ion-chip-button fill="clear" onClick={() => this.del('chip1')} class="my-custom-chip">
              <ion-icon name="close-circle" />
            </ion-chip-button>
          </ion-chip>

          <ion-chip id="chip2">
            <ion-icon name="pin" />
            <ion-label>With Icon</ion-label>
            <ion-chip-button onClick={() => this.del('chip2')}>
              <ion-icon name="close" />
            </ion-chip-button>
          </ion-chip>

          <ion-chip id="chip3">
            <ion-avatar>
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
            </ion-avatar>
            <ion-label>With Avatar</ion-label>
            <ion-chip-button fill="clear" color="dark" onClick={() => this.del('chip3')}>
              <ion-icon name="close-circle" />
            </ion-chip-button>
          </ion-chip>

          <ion-chip color="primary" id="chip4">
            <ion-icon name="pin" />
            <ion-label>Primary</ion-label>
            <ion-chip-button fill="clear" onClick={() => this.del('chip4')}>
              <ion-icon name="close-circle" />
            </ion-chip-button>
          </ion-chip>

          <ion-item>
            <ion-label>Chip Item</ion-label>
            <ion-chip slot="end" id="chip5">
              <ion-icon name="pin" color="primary" />
              <ion-label>Default</ion-label>
              <ion-chip-button fill="clear" color="light" onClick={() => this.del('chip5')}>
                <ion-icon name="close-circle" />
              </ion-chip-button>
            </ion-chip>
          </ion-item>
        </ion-content>
      </div>
    );
  }
}
