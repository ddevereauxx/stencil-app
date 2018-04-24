import { Component } from '@stencil/core';


@Component({
  tag: 'page-infinite-scroll',
  styleUrl: 'page-infinite-scroll.scss'
})
export class PageInfiniteScroll {
  items: any;
  list: any;
  infiniteScroll: any;

  componentDidLoad() {
    this.items = [];
    for (var i = 0; i < 30; i++) {
      this.items.push( i+1 );
    }
    this.list = document.getElementById('list');
    this.infiniteScroll = document.getElementById('infinite-scroll');

    this.renderItem();

    this.infiniteScroll.addEventListener('ionInfinite', async () => {
      console.log('Loading data...');
      const data = await this.getAsyncData();
      this.items = this.items.concat(data);
      this.infiniteScroll.complete();
      this.renderItem();
      console.log('Done');
    });
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  renderItem() {
    let html = '';
    for(let item of this.items) {
      html += `<ion-item>${item}</ion-item>`;
    }
    this.list.innerHTML = html;
  }

  getAsyncData() {
    // async return mock data
    return new Promise(resolve => {
      setTimeout(() => {
        let data = [];
        for (var i = 0; i < 30; i++) {
          data.push(i);
        }

        resolve(data);
      }, 500);
    });
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content padding>
          <h2>PageInfiniteScroll</h2>

          <ion-button onClick={() => this.toggleInfiniteScroll()}>
            Toggle InfiniteScroll
          </ion-button>

          <ion-list id="list">

          </ion-list>

          <ion-infinite-scroll threshold="100px" id="infinite-scroll">
            <ion-infinite-scroll-content
              loadingSpinner="bubbles"
              loadingText="Loading more data...">
            </ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </ion-content>
      </div>
    );
  }
}
