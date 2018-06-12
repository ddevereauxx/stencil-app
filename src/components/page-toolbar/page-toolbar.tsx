import { Component } from '@stencil/core';

@Component({
  tag: 'page-toolbar',
  styleUrl: 'page-toolbar.css'
})
export class PageToolbar {
  componentDidLoad() {
    let items = [];
    for (let i = 0; i < 30; i++) {
      items.push(i + 1);
    }
    const list = document.getElementById('dynamicList');

    let html = '';
    for (let item of items) {
      html += `<ion-item>${item}</ion-item>`;
    }
    list.innerHTML = html;
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Toolbar</ion-title>
          </ion-toolbar>

          <ion-toolbar color="primary">
            <ion-buttons slot="secondary">
              <ion-button>
                <ion-icon slot="icon-only" name="contact" />
              </ion-button>
              <ion-button>
                <ion-icon slot="icon-only" name="search" />
              </ion-button>
            </ion-buttons>
            <ion-buttons slot="primary">
              <ion-button color="secondary">
                <ion-icon slot="icon-only" name="more" />
              </ion-button>
            </ion-buttons>
            <ion-title>Subheader</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" fullscreen={true}>
          <ion-card color="secondary">
            <ion-card-header>Card Header</ion-card-header>
            <ion-card-content>
              <ion-card-title>Title</ion-card-title>
              Some normal text in content.
              <h3>h3 in content</h3>
              <p>Paragraph in content.</p>
              <p>Another paragraph in content.</p>
            </ion-card-content>
          </ion-card>

          <ion-card color="primary" class="rainbow-content">
            <ion-card-header>Card Header</ion-card-header>
            <ion-card-content>
              <ion-card-title>Title</ion-card-title>
              Some normal text in content.
              <h3>h3 in content</h3>
              <p>Paragraph in content.</p>
              <p>Another paragraph in content.</p>
            </ion-card-content>
          </ion-card>

          <ion-card color="primary">
            <ion-card-header>Card Header</ion-card-header>
            <ion-card-content>
              <ion-card-title>Title</ion-card-title>
              Some normal text in content.
              <h3>h3 in content</h3>
              <p>Paragraph in content.</p>
              <p>Another paragraph in content.</p>
            </ion-card-content>
          </ion-card>

          <ion-list id="dynamicList" />
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            <ion-buttons slot="primary">
              <ion-button>
                <ion-icon slot="icon-only" name="search" />
              </ion-button>
            </ion-buttons>
            <ion-searchbar />
          </ion-toolbar>

          <ion-toolbar>
            <ion-title>Footer</ion-title>
          </ion-toolbar>
        </ion-footer>
      </div>
    );
  }
}
