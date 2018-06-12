import { Component } from '@stencil/core';

@Component({
  tag: 'page-toggle'
})
export class PageToggle {
  printForm() {
    console.log('TODO get working with forms');
  }

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
            <ion-title>Toggle - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-list>
            <ion-item>
              <ion-label>Apple</ion-label>
              <ion-toggle slot="start" name="apple" checked />
            </ion-item>

            <ion-item>
              <ion-label>Banana</ion-label>
              <ion-toggle slot="start" name="banana" checked />
            </ion-item>

            <ion-item>
              <ion-label>Cherry, disabled</ion-label>
              <ion-toggle slot="start" color="danger" name="cherry" disabled />
            </ion-item>

            <ion-item>
              <ion-label>Grape, checked, disabled</ion-label>
              <ion-toggle slot="start" id="grapeChecked" name="grape" checked disabled />
            </ion-item>

            <ion-item>
              <ion-label>Kiwi, (ionChange) Secondary color</ion-label>
              <ion-toggle slot="start" color="secondary" onChange={() => true} />
            </ion-item>

            <ion-item>
              <ion-label>Strawberry, (ionChange) checked="true"</ion-label>
              <ion-toggle slot="start" color="light" checked={true} onChange={() => true} />
            </ion-item>

            <ion-item>
              <ion-label>Checkbox right, checked, really long text that should ellipsis</ion-label>
              <ion-toggle slot="end" color="danger" checked />
            </ion-item>

            <ion-item>
              <ion-label>Checkbox right side</ion-label>
              <ion-toggle slot="end" checked />
            </ion-item>

            <ion-item>
              <ion-label>Button w/ right side default icon, really long text that should ellipsis</ion-label>
              <ion-icon name="information-circle" slot="end" />
            </ion-item>
          </ion-list>

          <p aria-hidden="true" text-center>
            <ion-button onClick={() => this.toggleBoolean('grapeChecked', 'checked')} fill="outline" size="small">
              Grape Checked
            </ion-button>
            <ion-button onClick={() => this.toggleBoolean('grapeChecked', 'disabled')} fill="outline" size="small">
              Grape Disabled
            </ion-button>
            <ion-button onClick={() => this.printForm()} fill="outline" size="small">
              Print Form
            </ion-button>
          </p>

          <p>
            <ion-toggle id="standAloneChecked" />
            Stand-alone toggle: <span id="standAloneCheckedSpan" />
          </p>
        </ion-content>
      </div>
    );
  }
}
