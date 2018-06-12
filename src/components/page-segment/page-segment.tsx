import { Component } from '@stencil/core';

@Component({
  tag: 'page-segment',
  styleUrl: 'page-segment.css'
})
export class PageSegment {
  dynamicAttrDisable: any;
  dynamicPropDisable: any;
  dynamicButtons: any;

  componentDidLoad() {
    this.dynamicAttrDisable = document.getElementsByName('dynamicAttrDisable');
    this.dynamicPropDisable = document.getElementsByName('dynamicPropDisable');

    this.dynamicButtons = document.getElementById('dynamicButtons');
    this.updateSegmentButtons(2);

    setTimeout(() => {
      this.updateSegmentButtons(4);
    }, 4000);
  }

  toggleDisabled() {
    for (let i = 0; i < this.dynamicAttrDisable.length; i++) {
      const attrIsDisabled = this.dynamicAttrDisable[i].getAttribute('disabled') === 'true' ? false : true;
      this.dynamicAttrDisable[i].setAttribute('disabled', attrIsDisabled);
    }
    for (let i = 0; i < this.dynamicPropDisable.length; i++) {
      const propIsDisabled = this.dynamicPropDisable[i].disabled === true ? false : true;
      this.dynamicPropDisable[i].disabled = propIsDisabled;
    }
  }

  toggleValue() {
    let dynamicAttrElem = document.getElementsByName('dynamicAttrElem');
    for (let i = 0; i < dynamicAttrElem.length; i++) {
      let dynamicAttrValue = dynamicAttrElem[i].getAttribute('value');

      if (dynamicAttrValue === 'active') {
        dynamicAttrElem[i].setAttribute('value', 'inactive');
      } else if (dynamicAttrValue === 'inactive') {
        dynamicAttrElem[i].setAttribute('value', 'disabled');
      } else {
        dynamicAttrElem[i].setAttribute('value', 'active');
      }
    }
  }

  async listenForEvent() {
    const ionSegmentElement: any = document.querySelector('ion-segment.event-tester');
    await ionSegmentElement.componentOnReady();
    ionSegmentElement.addEventListener('ionChange', event => {
      console.log('event.target: ', event.target.value);
    });
  }

  updateSegmentButtons(length) {
    this.dynamicButtons.innerHTML = '';

    for (let i = 0; i < length; i++) {
      this.dynamicButtons.innerHTML += `
                <ion-segment-button value="segment-${i}">
                  Btn ${i}
                </ion-segment-button>`;
    }
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header no-border>
          <ion-toolbar>
            <ion-title>Segment - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-toolbar>
            <ion-segment class="event-tester" value="Free">
              <ion-segment-button value="Paid">Paid</ion-segment-button>
              <ion-segment-button value="Free">Free</ion-segment-button>
              <ion-segment-button value="Top">Top</ion-segment-button>
            </ion-segment>
          </ion-toolbar>

          <ion-toolbar>
            <ion-segment name="dynamicPropDisable" disabled color="danger">
              <ion-segment-button value="Bookmarks">Bookmarks</ion-segment-button>
              <ion-segment-button value="Reading List">Reading List</ion-segment-button>
              <ion-segment-button value="Shared Links">Shared Links</ion-segment-button>
            </ion-segment>
          </ion-toolbar>

          <ion-toolbar>
            <ion-segment name="dynamicAttrElem" color="secondary" value="active">
              <ion-segment-button value="active">Active</ion-segment-button>
              <ion-segment-button name="dynamicAttrDisable" value="disabled" disabled={true}>
                Disabled
              </ion-segment-button>
              <ion-segment-button value="inactive" disabled={false}>
                Inactive
              </ion-segment-button>
            </ion-segment>
          </ion-toolbar>

          <ion-toolbar>
            <ion-segment color="danger">
              <ion-segment-button value="sunny">Sunny</ion-segment-button>
              <ion-segment-button value="rainy" checked>
                Rainy
              </ion-segment-button>
            </ion-segment>
          </ion-toolbar>

          <div padding>
            <ion-segment>
              <ion-segment-button>Seg 1</ion-segment-button>
              <ion-segment-button>Seg 2</ion-segment-button>
              <ion-segment-button>Seg 3</ion-segment-button>
            </ion-segment>

            <ion-segment disabled>
              <ion-segment-button>Seg 2 1</ion-segment-button>
              <ion-segment-button checked>Seg 2 2</ion-segment-button>
              <ion-segment-button>Seg 2 3</ion-segment-button>
            </ion-segment>

            <ion-segment color="dark" value="Reading List">
              <ion-segment-button value="Bookmarks">
                <ion-icon name="book" />
              </ion-segment-button>
              <ion-segment-button value="Reading List">
                <ion-icon name="glasses" />
              </ion-segment-button>
              <ion-segment-button value="Shared Links">
                <ion-icon name="at" />
              </ion-segment-button>
            </ion-segment>

            <ion-segment name="dynamicPropDisable" disabled color="danger">
              <ion-segment-button value="Bookmarks">Bookmarks</ion-segment-button>
              <ion-segment-button value="Reading List">Reading List</ion-segment-button>
              <ion-segment-button value="Shared Links">Shared Links</ion-segment-button>
            </ion-segment>

            <ion-segment id="finalSegment" name="dynamicAttrElem" color="secondary" value="active">
              <ion-segment-button value="active">Active</ion-segment-button>
              <ion-segment-button name="dynamicAttrDisable" value="disabled" disabled={true}>
                Disabled
              </ion-segment-button>
              <ion-segment-button value="inactive" disabled={false}>
                Inactive
              </ion-segment-button>
            </ion-segment>

            <ion-segment id="dynamicButtons" color="dark" />
          </div>

          <div padding-horizontal>
            <ion-button expand="block" onClick={() => this.toggleDisabled()}>
              Toggle Disabled
            </ion-button>
          </div>
          <div padding>
            <ion-button expand="block" color="secondary" onClick={() => this.toggleValue()}>
              Toggle Value
            </ion-button>
          </div>
        </ion-content>
      </div>
    );
  }
}
