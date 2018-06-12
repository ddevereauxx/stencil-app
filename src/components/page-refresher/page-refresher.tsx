import { Component } from '@stencil/core';

@Component({
  tag: 'page-refresher'
})
export class PageRefresher {
  items: any = [];
  list: any;

  componentDidLoad() {
    for (let i = 0; i < 5; i++) {
      this.items.push(i + 1);
    }
    this.list = document.getElementById('list');
    const refresher: any = document.getElementById('refresher');
    refresher.addEventListener('ionRefresh', async () => {
      console.log('Loading data...');
      const data = await this.getAsyncData();
      this.items = this.items.concat(data);
      refresher.complete();
      this.renderItem();
      console.log('Done');
    });

    this.renderItem();
  }

  renderItem() {
    let html = '';
    for (let item of this.items) {
      html += `<ion-item button>${item}</ion-item>`;
    }
    this.list.innerHTML = html;
  }
  getAsyncData() {
    // async return mock data
    return new Promise(resolve => {
      setTimeout(() => {
        let data = [];
        for (let i = 0; i < 5; i++) {
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
            <ion-title>Pull To Refresh</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-refresher id="refresher" disabled={false} slot="fixed">
            <ion-refresher-content pulling-text="Pull to refresh..." refreshing-spinner="bubbles" refreshing-text="Refreshing..." />
          </ion-refresher>

          <ion-list id="list" />
        </ion-content>
      </div>
    );
  }
}
