import { Component } from '@stencil/core';

@Component({
  tag: 'page-textarea'
})
export class PageTextarea {
  toggleBoolean(id, prop) {
    let el = document.getElementById(id);

    let isTrue = el[prop] ? false : true;
    el[prop] = isTrue;
    console.log('in toggleBoolean, setting', prop, 'to', isTrue);
  }

  toggleString(id, prop) {
    let el = document.getElementById(id);
    console.log('INPUT ELE', el);

    let newString = el[prop] === 'dynamic' ? 'changed' : 'dynamic';
    el[prop] = newString;
    console.log('in toggleString, setting', prop, 'to', newString);
  }

  clearString(id, prop) {
    let el = document.getElementById(id);

    el[prop] = '';
    console.log('in toggleString, setting', prop, 'to', '');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Input - Textarea</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-list>
            <ion-item>
              <ion-label color="primary">Inline Label</ion-label>
              <ion-textarea placeholder="Textarea" />
            </ion-item>

            <ion-item>
              <ion-label color="primary" fixed>
                Fixed Label
              </ion-label>
              <ion-textarea placeholder="Textarea" />
            </ion-item>

            <ion-item>
              <ion-textarea placeholder="Textarea with no label" />
            </ion-item>

            <ion-item>
              <ion-label color="primary" stacked>
                Stacked Label
              </ion-label>
              <ion-textarea placeholder="Textarea" />
            </ion-item>

            <ion-item>
              <ion-label color="primary" floating>
                Floating Label
              </ion-label>
              <ion-textarea />
            </ion-item>

            <ion-item>
              <ion-label>Disabled</ion-label>
              <ion-textarea id="dynamicDisabled" value="Disabled" disabled />
            </ion-item>

            <ion-item>
              <ion-label>Readonly</ion-label>
              <ion-textarea id="dynamicReadonly" value="Readonly" readonly />
            </ion-item>

            <ion-item>
              <ion-label>Dynamic Value</ion-label>
              <ion-input id="dynamicValue" value="dynamic" />
            </ion-item>

            <ion-item>
              <ion-label>Dynamic Value</ion-label>
              <ion-textarea id="dynamicTextareaValue" value="dynamic" />
            </ion-item>

            <ion-item>
              <ion-label color="primary">Clear on Edit</ion-label>
              <ion-textarea clear-on-edit="true" />
            </ion-item>

            <ion-item>
              <ion-label color="primary">Clear on Edit</ion-label>
              <ion-input clear-on-edit="true" />
            </ion-item>
          </ion-list>

          <div text-center>
            <ion-button onClick={() => this.toggleBoolean('dynamicDisabled', 'disabled')}>Toggle Disabled</ion-button>

            <ion-button color="secondary" onClick={() => this.toggleBoolean('dynamicReadonly', 'readonly')}>
              Toggle Readonly
            </ion-button>

            <ion-button color="light" onClick={() => this.toggleString('dynamicValue', 'value') && this.toggleString('dynamicTextareaValue', 'value')}>
              Toggle Value
            </ion-button>

            <ion-button color="danger" onClick={() => this.clearString('dynamicValue', 'value') && this.clearString('dynamicTextareaValue', 'value')}>
              Clear Value
            </ion-button>
          </div>
        </ion-content>
      </div>
    );
  }
}
