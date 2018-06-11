import { Component } from '@stencil/core';

@Component({
  tag: 'page-avatar'
})
export class PageAvatar {
  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Avatar - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-avatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
          </ion-avatar>

          <ion-chip>
            <ion-avatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </ion-avatar>
            <ion-label>Chip Avatar</ion-label>
          </ion-chip>

          <ion-item>
            <ion-avatar slot="start">
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </ion-avatar>
            <ion-label>Item Avatar</ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="end">
              <img src="https://images.unsplash.com/photo-1511125357779-27038c647d9d?auto=format&fit=crop&w=1951&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
            </ion-avatar>
            <ion-label>Wide Avatar</ion-label>
          </ion-item>
        </ion-content>
      </div>
    );
  }
}
