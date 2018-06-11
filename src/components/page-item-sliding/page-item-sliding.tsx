import { Component } from '@stencil/core';

@Component({
  tag: 'page-item-sliding',
  styleUrl: 'page-item-sliding.css'
})
export class PageItemSliding {
  dynamicSlidingEnabled: any;
  dynamicShowOptions: any;
  dynamicText: boolean = true;
  moreTextSpans: any;
  archiveTextSpans: any;

  componentDidLoad() {
    this.dynamicSlidingEnabled = document.getElementsByClassName('sliding-enabled');

    // Toggle the dynamic options
    this.dynamicShowOptions = document.getElementsByClassName('show-options');
    this.toggleDynamicOptions();

    // Change the text for the more and archive buttons
    this.moreTextSpans = document.getElementsByClassName('more-text');
    this.archiveTextSpans = document.getElementsByClassName('archive-text');
    this.changeDynamicText();

    document.addEventListener('ionSwipe', e => {
      let ev: any = e;
      console.log('SWIPE!!', ev.detail);
    });
    document.addEventListener('ionDrag', e => {
      // console.log('DRAG!!', ev.detail);
      let ev: any = e;
      let slidingRatio = ev.target.getSlidingRatio();
      console.log('sliding', slidingRatio);

      if (slidingRatio > 0) {
        // positive
        console.log('right side');
      } else {
        // negative
        console.log('left side');
      }
      if (Math.abs(slidingRatio) > 1) {
        console.log('overscroll');
      }
    });
  }

  toggleDynamicOptions() {
    // TODO the element needs to be removed / added to the DOM
  }

  changeDynamicText() {
    this.dynamicText = !this.dynamicText;

    for (let i = 0; i < this.moreTextSpans.length; i++) {
      let moreText = this.dynamicText ? 'Changed More' : 'Dynamic More';
      this.moreTextSpans[i].innerHTML = moreText;
    }

    for (let i = 0; i < this.archiveTextSpans.length; i++) {
      let archiveText = this.dynamicText ? 'Changed Archive' : 'Dynamic Archive';
      this.archiveTextSpans[i].innerHTML = archiveText;
    }
  }

  toggleSliding() {
    // this.slidingEnabled = !this.slidingEnabled;
  }

  closeOpened() {
    let list: any = document.getElementById('list');
    list.closeSlidingItems();
  }

  noclose(item) {
    let itemEle = document.getElementById(item);
    console.log('no close', itemEle);
  }

  unread(item) {
    this.closeSlidingItem('UNREAD', item);
  }

  archive(item) {
    this.closeSlidingItem('ARCHIVE', item);
  }

  del(item) {
    this.closeSlidingItem('DELETE', item);
  }

  download(item) {
    let itemEle: any = document.getElementById(item);
    console.log(itemEle);
    itemEle.classList.add('downloading');
    setTimeout(() => {
      alert('Item was downloaded!');

      itemEle.classList.remove('downloading');
      itemEle.close();
    }, 1500);
  }

  closeSlidingItem(option, item) {
    let itemEle: any = document.getElementById(item);

    // TODO open alert instead
    if (itemEle) {
      itemEle.close();
    }
    console.log(option, itemEle);
  }

  clickedItem(item) {
    let itemEle = document.getElementById(item);
    console.log('Clicked, ion-item', itemEle);
  }

  reload() {
    window.location.reload();
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Item Sliding - Basic</ion-title>
            <ion-buttons slot="secondary">
              <ion-button onClick={() => this.changeDynamicText()}>Dynamic</ion-button>
            </ion-buttons>
            <ion-buttons slot="primary">
              <ion-button onClick={() => this.reload()}>Reload</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <div padding>
            <ion-button expand="block" onClick={() => this.toggleSliding()}>
              Toggle sliding
            </ion-button>
            <ion-button expand="block" onClick={() => this.toggleDynamicOptions()}>
              Toggle Dynamic Options
            </ion-button>
            <ion-button expand="block" onClick={() => this.closeOpened()}>
              Close Opened Items
            </ion-button>
          </div>

          <ion-list id="list">
            <div class="nested-div">
              <ion-item-sliding>
                <ion-item>
                  <ion-label>
                    <h2>No Options</h2>
                    <p>Should not error or swipe without options</p>
                  </ion-label>
                </ion-item>
              </ion-item-sliding>

              <ion-item-sliding id="item6">
                <ion-item>
                  <ion-label>One Line, dynamic option and text</ion-label>
                </ion-item>
                <ion-item-options class="show-options">
                  <ion-item-option color="primary">
                    <ion-icon name="more" />
                    <span class="more-text" />
                  </ion-item-option>
                  <ion-item-option color="secondary" onClick={() => this.archive('item6')}>
                    <ion-icon name="archive" />
                    <span class="archive-text" />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item6">
                <ion-item>
                  <ion-label>Two options, one dynamic option and text</ion-label>
                </ion-item>
                <ion-item-options side="start">
                  <ion-item-option color="primary">
                    <ion-icon slot="icon-only" name="more" />
                  </ion-item-option>
                </ion-item-options>
                <ion-item-options side="end" class="show-options">
                  <ion-item-option color="primary">
                    <ion-icon name="more" />
                    <span class="more-text" />
                  </ion-item-option>
                  <ion-item-option color="secondary" onClick={() => this.archive('item6')}>
                    <ion-icon name="archive" />
                    <span class="archive-text" />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item100">
                <ion-item href="#">
                  <ion-label>
                    <h2>HubStruck Notifications</h2>
                    <p>A new message from a repo in your network</p>
                    <p>Oceanic Next has joined your network</p>
                  </ion-label>
                  <ion-note slot="end">10:45 AM</ion-note>
                </ion-item>

                <ion-item-options side="start">
                  <ion-item-option onClick={() => this.noclose('item100')}>No close</ion-item-option>
                </ion-item-options>
                <ion-item-options side="end">
                  <ion-item-option color="danger" onClick={() => this.unread('item100')}>
                    <ion-icon slot="icon-only" name="trash" />
                  </ion-item-option>
                  <ion-item-option onClick={() => this.unread('item100')}>
                    <ion-icon slot="icon-only" name="star" />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item0">
                <ion-item text-wrap onClick={() => this.clickedItem('item0')}>
                  <ion-label>
                    <h2>RIGHT side - no icons</h2>
                    <p>Hey do you want to go to the game tonight?</p>
                  </ion-label>
                </ion-item>
                <ion-item-options class="sliding-enabled">
                  <ion-item-option color="primary" onClick={() => this.archive('item0')}>
                    Archive
                  </ion-item-option>
                  <ion-item-option color="danger" onClick={() => this.del('item0')}>
                    Delete
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item1">
                <ion-item text-wrap detail href="#" class="activated">
                  <ion-label>
                    <h2>LEFT side - no icons</h2>
                    <p>I think I figured out how to get more Mountain Dew</p>
                  </ion-label>
                </ion-item>
                <ion-item-options side="start" class="sliding-enabled">
                  <ion-item-option color="primary" onClick={() => this.archive('item1')}>
                    Archive
                  </ion-item-option>
                  <ion-item-option color="danger" onClick={() => this.del('item1')}>
                    Delete
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item2">
                <ion-item text-wrap detail>
                  <ion-label>
                    <h2>RIGHT/LEFT side - icons</h2>
                    <p>I think I figured out how to get more Mountain Dew</p>
                  </ion-label>
                </ion-item>
                <ion-item-options side="start" class="sliding-enabled">
                  <ion-item-option color="secondary" expandable onClick={() => this.unread('item2')}>
                    <ion-icon name="ios-checkmark" />Unread
                  </ion-item-option>
                </ion-item-options>

                <ion-item-options side="end" class="sliding-enabled">
                  <ion-item-option color="primary" onClick={() => this.archive('item2')}>
                    <ion-icon name="mail" />Archive
                  </ion-item-option>
                  <ion-item-option color="danger" onClick={() => this.del('item2')} expandable>
                    <ion-icon name="trash" />Delete
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item3">
                <ion-item text-wrap detail>
                  <ion-label>
                    <h2>RIGHT/LEFT side - icons (slot="start")</h2>
                    <p>I think I figured out how to get more Mountain Dew</p>
                  </ion-label>
                </ion-item>
                <ion-item-options side="start" icon-start class="sliding-enabled">
                  <ion-item-option color="secondary" expandable onClick={() => this.unread('item3')}>
                    <ion-icon name="ios-checkmark" />Unread
                  </ion-item-option>
                </ion-item-options>

                <ion-item-options icon-start>
                  <ion-item-option color="primary" onClick={() => this.archive('item3')}>
                    <ion-icon name="mail" />Archive
                  </ion-item-option>
                  <ion-item-option color="danger" onClick={() => this.del('item3')} expandable class="sliding-enabled">
                    <ion-icon name="trash" />Delete
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item4">
                <ion-item>
                  <ion-icon name="mail" slot="start" />
                  <ion-label>One Line w/ Icon, div only text</ion-label>
                </ion-item>
                <ion-item-options icon-start>
                  <ion-item-option color="primary" onClick={() => this.archive('item4')} expandable class="sliding-enabled">
                    <ion-icon name="archive" />Archive
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item5" class="sliding-enabled">
                <ion-item>
                  <ion-avatar slot="start">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
                  </ion-avatar>
                  <ion-label>One Line w/ Avatar, div only text</ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option color="primary" expandable>
                    <ion-icon name="more" />More
                  </ion-item-option>
                  <ion-item-option color="secondary" onClick={() => this.archive('item5')}>
                    <ion-icon name="archive" />Archive
                  </ion-item-option>
                  <ion-item-option color="light" onClick={() => this.del('item5')}>
                    <ion-icon name="trash" />Delete
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item7">
                <ion-item>
                  <ion-label>One Line, dynamic icon-start option</ion-label>
                </ion-item>
                <ion-item-options icon-start>
                  <ion-item-option color="primary">
                    <ion-icon name="more" />
                    <span class="more-text" />
                  </ion-item-option>
                  <ion-item-option color="secondary" onClick={() => this.archive('item7')}>
                    <ion-icon name="archive" />
                    <span class="archive-text" />
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item8">
                <ion-item>
                  <ion-thumbnail slot="start">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
                  </ion-thumbnail>
                  <ion-label>
                    <h2>DOWNLOAD</h2>
                    <p>Paragraph text.</p>
                  </ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option color="primary" onClick={() => this.archive('item8')}>
                    <ion-icon name="archive" />Archive
                  </ion-item-option>
                  <ion-item-option color="secondary" expandable onClick={() => this.download('item8')}>
                    <ion-icon name="download" class="download-hide" />
                    <div class="download-hide">Download</div>

                    <ion-icon class="download-spinner" name="refresh" />
                    <div class="download-spinner">Loading...</div>
                  </ion-item-option>
                </ion-item-options>
              </ion-item-sliding>

              <ion-item-sliding id="item9">
                <ion-item>
                  <ion-thumbnail slot="start">
                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==" />
                  </ion-thumbnail>
                  <ion-label>
                    <h2>ion-item-sliding without options (no sliding)</h2>
                    <p>Paragraph text.</p>
                  </ion-label>
                </ion-item>
              </ion-item-sliding>

              <ion-item text-wrap>
                <ion-label>
                  <h2>Normal ion-item (no sliding)</h2>
                  <p>Paragraph text.</p>
                </ion-label>
              </ion-item>

              <ion-item text-wrap onClick={() => this.clickedItem('item9')}>
                <ion-label>
                  <h2>Normal button (no sliding)</h2>
                  <p>Hey do you want to go to the game tonight?</p>
                </ion-label>
              </ion-item>
            </div>
          </ion-list>
        </ion-content>
      </div>
    );
  }
}
