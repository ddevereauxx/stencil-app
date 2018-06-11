import { Component } from '@stencil/core';

@Component({
  tag: 'page-radio',
  styleUrl: 'page-radio.css'
})
export class PageRadio {
  radioValues: any = ['fruitRadio', 'pizzaRadio', 'veggiesRadio'];

  componentDidLoad() {
    this.printRadioValues();
  }

  printForm(ev) {
    ev;
    console.log('TODO get working with forms');
  }

  printRadioValues() {
    let html = 'Values:<br>';

    for (let i = 0; i < this.radioValues.length; i++) {
      let radio = this.radioValues[i];
      let el: any = document.getElementById(radio);
      html += '<span>' + radio + ': ' + el.value + ' </span><br>';
    }

    let valueEle = document.getElementById('valuesCode');
    valueEle.innerHTML = html;
  }

  toggleBoolean(id, prop) {
    let el = document.getElementById(id);

    let isTrue = el[prop] ? false : true;
    el[prop] = isTrue;
    console.debug('in toggleBoolean, setting', prop, 'to', isTrue);
  }

  toggleString(id, prop, firstVal, secondVal) {
    let el = document.getElementById(id);

    let stringVal = el[prop] == firstVal ? secondVal : firstVal;
    el[prop] = stringVal;
    console.debug('in toggleString, setting', prop, 'to', stringVal);
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Radio - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" class="radio-test outer-content">
          <ion-list>
            <ion-radio-group id="fruitRadio">
              <ion-item-divider>
                <ion-label>Fruits (Group w/ values)</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>Apple</ion-label>
                <ion-radio slot="start" value="apple" />
              </ion-item>

              <ion-item>
                <ion-label>Grape, checked, disabled</ion-label>
                <ion-radio slot="start" id="grapeChecked" value="grape" checked disabled />
              </ion-item>

              <ion-item>
                <ion-label>Cherry</ion-label>
                <ion-radio slot="start" color="danger" value="cherry" />
              </ion-item>
            </ion-radio-group>

            <ion-radio-group id="pizzaRadio">
              <ion-item-divider>
                <ion-label>Extra Pizza Topping (Group w/ no values)</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>Pepperoni</ion-label>
                <ion-radio slot="end" name="pepperoni" checked />
              </ion-item>

              <ion-item>
                <ion-label>Sausage</ion-label>
                <ion-radio slot="end" color="danger" name="sausage" />
              </ion-item>
            </ion-radio-group>

            <ion-radio-group id="veggiesRadio" allow-empty-selection>
              <ion-item-divider>
                <ion-label>Veggies (Group w/ allow empty)</ion-label>
              </ion-item-divider>
              <ion-item>
                <ion-label>Carrot</ion-label>
                <ion-radio slot="end" value="carrot" />
              </ion-item>

              <ion-item>
                <ion-label>Tomato</ion-label>
                <ion-radio slot="end" value="tomato" />
              </ion-item>

              <ion-item>
                <ion-label>Broccoli</ion-label>
                <ion-radio id="dangerRadio" slot="end" color="danger" value="broccoli" checked />
              </ion-item>
            </ion-radio-group>

            <ion-item>
              <ion-button slot="start" onClick={() => this.toggleBoolean('grapeChecked', 'checked')} fill="outline" size="small">
                Checked
              </ion-button>
              <ion-button slot="start" onClick={() => this.toggleBoolean('grapeChecked', 'disabled')} fill="outline" size="small">
                Disabled
              </ion-button>
              <ion-button slot="end" onClick={() => this.printRadioValues()} fill="outline" size="small">
                Print
              </ion-button>
              <ion-button slot="end" onClick={() => this.toggleString('dangerRadio', 'color', 'danger', 'secondary')} fill="outline" size="small" color="danger">
                Color
              </ion-button>
            </ion-item>
          </ion-list>

          <pre id="valuesCode" />

          <ion-list>
            <ion-list-header>No Radio Group</ion-list-header>
            <ion-item>
              <ion-label>Kiwi, (ionChange) Secondary color</ion-label>
              <ion-radio slot="start" color="secondary" />
            </ion-item>

            <ion-item>
              <ion-label>Strawberry, (ionChange) checked="true"</ion-label>
              <ion-radio slot="start" color="light" checked={true} />
            </ion-item>

            <ion-item>
              <ion-label>Checkbox right, checked, really long text that should ellipsis</ion-label>
              <ion-radio slot="end" color="danger" checked />
            </ion-item>

            <ion-item>
              <ion-label>Checkbox right side</ion-label>
              <ion-radio slot="end" checked />
            </ion-item>

            <ion-item>
              <ion-label>Button w/ right side default icon, really long text that should ellipsis</ion-label>
              <ion-icon name="information-circle" slot="end" />
            </ion-item>
          </ion-list>

          <p>
            <ion-radio id="standAloneChecked" />
            Stand-alone checkbox: <span id="standAloneCheckedSpan" />
          </p>

          <ion-item>
            <ion-label>Checkbox / Toggle</ion-label>
            <ion-radio slot="start" id="checked" />
            <ion-toggle id="checked" />
          </ion-item>
          <ion-item>
            <ion-label>Checked</ion-label>
            <ion-radio slot="start" checked />
            <ion-toggle checked />
          </ion-item>
          <ion-item>
            <ion-label>Disabled</ion-label>
            <ion-radio slot="start" disabled />
            <ion-toggle disabled />
          </ion-item>
        </ion-content>
      </div>
    );
  }
}
