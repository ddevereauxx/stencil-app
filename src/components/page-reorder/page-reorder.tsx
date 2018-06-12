import { Component } from '@stencil/core';

@Component({
  tag: 'page-reorder'
})
export class PageReorder {
  componentDidLoad() {
    console.log('Component PageReorder was loaded');
  }

  toggleEdit() {
    const reorderGroup: any = document.getElementById('reorder');
    reorderGroup.disabled = !reorderGroup.disabled;
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Reorder - Basic</ion-title>
            <ion-buttons slot="primary">
              <ion-button onClick={() => this.toggleEdit()}>Toggle</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-list>
            <ion-reorder-group id="reorder">
              <ion-item>
                <ion-label>Item 1 (default ion-reorder)</ion-label>
                <ion-reorder slot="end" />
              </ion-item>

              <ion-item>
                <ion-label>Item 2 (default ion-reorder)</ion-label>
                <ion-reorder slot="end" />
              </ion-item>

              <ion-item>
                <ion-label>Item 3 (default ion-reorder slot="start")</ion-label>
                <ion-reorder slot="start" />
              </ion-item>

              <ion-item color="secondary">
                <ion-label>Item 4 (default ion-reorder slot="start")</ion-label>
                <ion-reorder slot="start" />
              </ion-item>

              <ion-item>
                <ion-label>Item 5 (custom ion-reorder)</ion-label>
                <ion-reorder slot="end">
                  <ion-icon name="pizza" />
                </ion-reorder>
              </ion-item>

              <ion-item>
                <ion-label>Item 6 (custom ion-reorder)</ion-label>
                <ion-reorder slot="end">
                  <ion-icon name="pizza" />
                </ion-reorder>
              </ion-item>

              <ion-item>
                <ion-label>Item 7 (custom ion-reorder slot="start")</ion-label>
                <ion-reorder slot="start">
                  <ion-icon name="pizza" />
                </ion-reorder>
              </ion-item>

              <ion-reorder>
                <ion-item>
                  <ion-label>Item 8 (the whole item can be dragged)</ion-label>
                </ion-item>
              </ion-reorder>

              <ion-reorder>
                <ion-item>
                  <ion-label>Item 9 (the whole item can be dragged)</ion-label>
                </ion-item>
              </ion-reorder>

              <ion-reorder>
                <ion-item>
                  <ion-label>Item 10 (the whole item can be dragged)</ion-label>
                </ion-item>
              </ion-reorder>
            </ion-reorder-group>
          </ion-list>
        </ion-content>
      </div>
    );
  }
}
