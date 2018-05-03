import { Component } from '@stencil/core';


@Component({
  tag: 'page-item',
  styleUrl: 'page-item.css'
})
export class PageItem {
  componentDidLoad() {
    console.log('Component PageItem was loaded');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content padding>
          <h2>PageItem</h2>

          <ion-list>
            <ion-list-header>
              <ion-label>
                List Header
              </ion-label>
            </ion-list-header>
            <ion-item>
              <ion-label>
                Item
              </ion-label>
            </ion-item>
            <ion-item-divider>
              <ion-label>
                Item Divider
              </ion-label>
            </ion-item-divider>
            <ion-item>
              <ion-label>
                Item
              </ion-label>
            </ion-item>
          </ion-list>

          <ion-item>
            <ion-label>
              Plain Ol' div with some text
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label>
              Single line text that should have ellipses when it doesn't all fit in the item
            </ion-label>
          </ion-item>

          <ion-item no-lines>
            <ion-label>
              Single line item with no lines
            </ion-label>
          </ion-item>

          <ion-item text-wrap>
            <ion-label>
              Multiline text that should wrap when it is too long to fit on one line in the item. Attribute on .item
            </ion-label>
          </ion-item>

          <ion-item text-wrap color="secondary">
            <ion-label>
              <h1>H1 Title Text</h1>
              <p>Paragraph line 1</p>
            </ion-label>
          </ion-item>

          <ion-item text-wrap>
            <ion-label>
              <h2>H2 Title Text</h2>
              <p>Paragraph line 1</p>
            </ion-label>
          </ion-item>

          <ion-item text-wrap>
            <ion-label>
              <h3 ion-text color="primary">H3 Title Text</h3>
              <p>Paragraph line 1</p>
              <p ion-text color="secondary">Paragraph line 2 secondary</p>
            </ion-label>
          </ion-item>

          <ion-item text-wrap>
            <ion-label>
              <h4>H4 Title Text</h4>
              <p>Paragraph line 1</p>
              <p>Paragraph line 2</p>
              <p>Paragraph line 3</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-label>
              Item using inner ion-label
            </ion-label>
          </ion-item>
        </ion-content>
      </div>
    );
  }
}
