import { Component } from '@stencil/core';

@Component({
  tag: 'page-virtual-scroll'
})
export class PageVirtualScroll {
  virtual: any;
  items: any;

  componentDidLoad() {
    this.virtual = document.getElementById('virtual');
    this.items = Array.from({ length: 100 }, (x, i) => {
      x;
      return i;
    });

    this.virtual.nodeRender = (el, cell) => {
      if (cell.type === 0) return this.renderItem(el, cell.value);
      return this.renderHeader(el, cell.value);
    };
    this.virtual.items = this.items;

    const infiniteScroll: any = document.getElementById('infinite-scroll');
    infiniteScroll.addEventListener('ionInfinite', async () => {
      console.log('Loading data...');
      const data = await this.getAsyncData();
      infiniteScroll.complete();
      this.addItems(data);

      console.log('Done');
    });

    this.virtual.itemHeight = () => 45;
    this.virtual.headerFn = () => {
      // if (index % 20 === 0) {
      //   return 'Header ' + index;
      // }
      return null;
    };
  }

  addItems(append?) {
    if (!append) {
      append = Array.from({ length: 10 }, (x, i) => {
        x;
        return 'append' + i;
      });
    }
    this.items.push(...append);
    this.virtual.markDirtyTail(append.length);
  }

  renderItem(el, item) {
    if (!el) {
      el = document.createElement('ion-item');
      const text = document.createTextNode(item);
      el['$content'] = text;
      el.appendChild(text);
    } else {
      el['$content'].nodeValue = item;
    }
    return el;
  }

  renderHeader(el, item) {
    if (!el) {
      el = document.createElement('ion-item-divider');
      const text = document.createTextNode(item);
      el['$content'] = text;
      el.appendChild(text);
    } else {
      el['$content'].nodeValue = item;
    }
    return el;
  }

  getAsyncData() {
    return new Promise(resolve => {
      setTimeout(() => {
        const data = Array.from({ length: 10 }, (x, i) => {
          x;
          return 'append' + i;
        });
        resolve(data);
      }, 500);
    });
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Ionic CDN demo</ion-title>
            <ion-buttons slot="primary">
              <ion-button onClick={() => this.addItems()}>Add Items</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <p>
            <ion-button onClick={() => this.addItems()}>Add Items</ion-button>
          </p>
          <ion-virtual-scroll id="virtual" />
          <ion-infinite-scroll threshold="100px" id="infinite-scroll">
            <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..." />
          </ion-infinite-scroll>
        </ion-content>
      </div>
    );
  }
}
