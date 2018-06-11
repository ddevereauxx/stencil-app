import { Component } from '@stencil/core';

@Component({
  tag: 'page-input'
})
export class PageInput {
  toggleBoolean(id, prop) {
    let el = document.getElementById(id);

    let isTrue = el[prop] ? false : true;
    el[prop] = isTrue;
    console.log('in toggleBoolean, setting', prop, 'to', isTrue);
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Input - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-list>
            <ion-item>
              <ion-input value="reallylonglonglonginputtoseetheedgesreallylonglonglonginputtoseetheedges" />
            </ion-item>

            <ion-item>
              <ion-label>Default Label</ion-label>
              <ion-input value="reallylonglonglonginputtoseetheedgesreallylonglonglonginputtoseetheedges" />
            </ion-item>

            <ion-item>
              <ion-label>Clear Input</ion-label>
              <ion-input clear-input value="reallylonglonglonginputtoseetheedgesreallylonglonglonginputtoseetheedges" />
            </ion-item>

            <ion-item>
              <ion-label position="floating">Floating</ion-label>
              <ion-input checked />
            </ion-item>

            <ion-item>
              <ion-label position="fixed">Type #</ion-label>
              <ion-input type="number" value="333" />
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Password</ion-label>
              <ion-input type="password" />
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Placeholder</ion-label>
              <ion-input placeholder="Enter Something" />
            </ion-item>

            <ion-item>
              <ion-label>Disabled</ion-label>
              <ion-input id="dynamicDisabled" value="Disabled" disabled />
            </ion-item>

            <ion-item>
              <ion-label>Readonly</ion-label>
              <ion-input id="dynamicReadonly" value="Readonly" readonly />
            </ion-item>

            <ion-item>
              <ion-label>Slot</ion-label>
              <ion-input slot="start" value="Start" />
            </ion-item>

            <ion-item>
              <ion-label>Toggle</ion-label>
              <ion-toggle checked slot="end" />
            </ion-item>

            <ion-item>
              <ion-label position="fixed">Type #</ion-label>
              <div type="number" value="333" class="input input-md hydrated">
                /*Comment*/<input
                  aria-disabled="false"
                  autocapitalize="none"
                  autocomplete="off"
                  autocorrect="off"
                  autofocus="false"
                  class="native-input native-input-md"
                  spellcheck="false"
                  type="number"
                />
                <button type="button" class="input-clear-icon" hidden={false} />
              </div>
            </ion-item>
          </ion-list>

          <div text-center>
            <ion-button onClick={() => this.toggleBoolean('dynamicDisabled', 'disabled')}>Toggle Disabled</ion-button>

            <ion-button color="secondary" onClick={() => this.toggleBoolean('dynamicReadonly', 'readonly')}>
              Toggle Readonly
            </ion-button>
          </div>

          <ion-item>
            <ion-label>Clear Input</ion-label>
            <ion-input clear-input value="reallylonglonglonginputtoseetheedgesreallylonglonglonginputtoseetheedges" />
          </ion-item>
        </ion-content>
      </div>
    );
  }
}
