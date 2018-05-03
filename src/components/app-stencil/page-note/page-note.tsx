import { Component } from '@stencil/core';


@Component({
  tag: 'page-note',
  styleUrl: 'page-note.css'
})
export class PageNote {
  note: any;

  componentDidLoad() {
    this.note = document.querySelector('#toggleColor');
  }

  toggleColor() {
    const prev = this.note.getAttribute('color');
    this.note.setAttribute('color', prev === 'secondary' ? 'primary' : 'secondary');
    this.note.innerHTML = prev === 'secondary' ? 'primary' : 'secondary';
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content padding>
          <h2>PageNote</h2>

          <ion-list>
            <ion-list-header>Notes Right</ion-list-header>
            <ion-item>
              <ion-label>Default Note</ion-label>
              <ion-note slot="end">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Primary Note</ion-label>
              <ion-note slot="end" color="primary">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Secondary Note</ion-label>
              <ion-note slot="end" color="secondary">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Tertiary Note</ion-label>
              <ion-note slot="end" color="tertiary">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Success Note</ion-label>
              <ion-note slot="end" color="success">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Warning Note</ion-label>
              <ion-note slot="end" color="warning">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Danger Note</ion-label>
              <ion-note slot="end" color="danger">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Light Note</ion-label>
              <ion-note slot="end" color="light">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Medium Note</ion-label>
              <ion-note slot="end" color="medium">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Dark Note</ion-label>
              <ion-note slot="end" color="dark">99</ion-note>
            </ion-item>

            <ion-item onClick={() => this.toggleColor()}>
              <ion-note id="toggleColor" slot="end" color="primary">primary</ion-note>
              <ion-label>Dynamic Note Color (toggle)</ion-label>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>Notes Left</ion-list-header>
            <ion-item>
              <ion-label>Default Note</ion-label>
              <ion-note slot="start">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Primary Note</ion-label>
              <ion-note slot="start" color="primary">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Secondary Note</ion-label>
              <ion-note slot="start" color="secondary">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Tertiary Note</ion-label>
              <ion-note slot="start" color="tertiary">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Success Note</ion-label>
              <ion-note slot="start" color="success">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Warning Note</ion-label>
              <ion-note slot="start" color="warning">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Danger Note</ion-label>
              <ion-note slot="start" color="danger">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Light Note</ion-label>
              <ion-note slot="start" color="light">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Medium Note</ion-label>
              <ion-note slot="start" color="medium">99</ion-note>
            </ion-item>

            <ion-item>
              <ion-label>Dark Note</ion-label>
              <ion-note slot="start" color="dark">99</ion-note>
            </ion-item>
          </ion-list>
        </ion-content>
      </div>
    );
  }
}
