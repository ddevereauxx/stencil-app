import { Component } from '@stencil/core';

@Component({
  tag: 'page-img',
  styleUrl: 'page-img.css'
})
export class PageImg {
  componentDidLoad() {
    document.body.addEventListener('ionImgDidLoad', event => {
      console.log('image did load', event.target);
    });
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Img - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <f />
          <f />
          <ion-img src="https://i.ytimg.com/vi/rq6M3imPgW4/maxresdefault.jpg" />
          <f />
          <f />
          <f />
          <f />
          <f />
          <f />
          <ion-img
            id="hidden-car"
            src="https://www.ericpetersautos.com/wp-content/uploads/2017/11/1961-Ferrari-250-GT-SWB-Berlinetta-by-Scaglietti_Erik-Fuller-c-2016-Courtesy-RM-Sothebys-1.jpg"
          />
        </ion-content>

        <ion-footer>
          <ion-toolbar>
            <ion-title>Footer</ion-title>
          </ion-toolbar>
        </ion-footer>
      </div>
    );
  }
}
