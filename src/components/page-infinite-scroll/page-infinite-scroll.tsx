import { Component } from '@stencil/core';

@Component({
  tag: 'page-infinite-scroll'
})
export class PageInfiniteScroll {
  list: any;
  items: any = [];
  infiniteScroll: any;

  componentDidLoad() {
    for (let i = 0; i < 30; i++) {
      this.items.push(i + 1);
    }
    this.list = document.getElementById('list');
    this.infiniteScroll = document.getElementById('infinite-scroll');

    this.infiniteScroll.addEventListener('ionInfinite', async () => {
      console.log('Loading data...');
      const data = await this.getAsyncData();
      this.items = this.items.concat(data);
      this.infiniteScroll.complete();
      this.renderList();
      console.log('Done');
    });
    this.renderList();
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  renderList() {
    let html = '';
    for (let item of this.items) {
      html += `<ion-item>${item}</ion-item>`;
    }
    this.list.innerHTML = html;
  }

  getAsyncData() {
    // async return mock data
    return new Promise(resolve => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 30; i++) {
          data.push(i);
        }

        resolve(data);
      }, 500);
    });
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Infinite Scroll - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" padding>
          <ion-button onClick={() => this.toggleInfiniteScroll()} block>
            Toggle InfiniteScroll
          </ion-button>

          <ion-list id="list" />

          <ion-infinite-scroll threshold="100px" id="infinite-scroll">
            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..." />
          </ion-infinite-scroll>
        </ion-content>
      </div>
    );
  }
}
