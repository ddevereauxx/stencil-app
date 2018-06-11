import { Component } from '@stencil/core';

@Component({
  tag: 'page-range'
})
export class PageRange {
  progressValue: any;
  brightnessValue: any;
  contrastValue: any;
  ranges: any;
  range: any;

  componentDidLoad() {
    this.progressValue = document.getElementById('progressValue');
    this.brightnessValue = document.getElementById('brightnessValue');
    this.contrastValue = document.getElementById('contrastValue');
    this.ranges = [this.progressValue, this.brightnessValue, this.contrastValue];
    this.range = document.getElementById('range');

    for (let i = 0; i < this.ranges.length; i++) {
      let el = this.ranges[i];
      el.value = (i + 1) * 10;
      this.updateRangeResult(el);

      el.addEventListener('ionChange', ev => {
        this.updateRangeResult(ev.target);
      });
    }

    this.progressValue.addEventListener('ionChange', ev => {
      console.log(ev.detail.value);
      this.brightnessValue.value = ev.detail.value;
      this.contrastValue.value = ev.target.value;
    });

    let knob: any = document.getElementById('multiKnob');
    let debounceRange = document.getElementById('debounce');
    knob.value = {
      lower: 33,
      upper: 60
    };
    knob.addEventListener('ionFocus', ev => {
      console.log('focus', ev);
    });
    knob.addEventListener('ionBlur', ev => {
      console.log('blur', ev);
    });
    knob.addEventListener('ionChange', ev => {
      console.log('change', ev);
    });
    debounceRange.addEventListener('ionChange', ev => {
      console.log('change', ev);
    });
  }

  updateRangeResult(el) {
    let resultEl: any = document.getElementById(`${el.id}Result`);
    resultEl.innerHTML = Math.round(el.value);
  }

  increaseRangeValues() {
    for (let i = 0; i < this.ranges.length; i++) {
      let el: any = document.getElementById(this.ranges[i]);
      let newValue = el.value + 10;

      if (newValue > 100) {
        newValue = 10;
      }

      el.value = newValue;
    }
  }

  elTest() {
    this.range.disabled = !this.range.disabled;
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>Range - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-list>
            <ion-list-header>Range color</ion-list-header>
            <ion-item>
              <ion-range value="20" />
            </ion-item>
            <ion-item>
              <ion-range value="60" color="light" step={10} pin={true} />
            </ion-item>
            <ion-item>
              <ion-range value="80" color="dark" step={10} snaps={true} pin={true} />
            </ion-item>
            <ion-item>
              <ion-range pin={true} color="secondary" value="86">
                <ion-icon small name="ios-sunny" slot="start" />
                <ion-icon name="ios-sunny" slot="end" />
              </ion-range>
              <ion-range pin={true} color="danger" value="54">
                <ion-icon small name="ios-thermometer" slot="start" />
                <ion-icon name="ios-thermometer" slot="end" />
              </ion-range>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>Dynamic Value</ion-list-header>
            <ion-item>
              <ion-range pin={true} step={0} color="secondary" id="progressValue" />
              <div id="progressValueResult" slot="end" />
            </ion-item>
            <ion-item>
              <ion-range pin={true} color="danger" id="brightnessValue" />
              <div id="brightnessValueResult" slot="end" />
            </ion-item>
            <ion-item>
              <ion-range pin={true} color="dark" id="contrastValue" />
              <div id="contrastValueResult" slot="end" />
            </ion-item>
            <ion-button onClick={() => this.increaseRangeValues()}>Increase Values</ion-button>
          </ion-list>

          <ion-list>
            <ion-list-header>Mode</ion-list-header>
            <ion-item>
              <ion-range value="50" mode="md" />
            </ion-item>
            <ion-item>
              <ion-range value="50" mode="ios" />
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>Options</ion-list-header>
            <ion-item>
              <ion-range pin={true} />
            </ion-item>
            <ion-item>
              <ion-range min={-200} max={200} steps={10} snaps={true} pin={true} />
            </ion-item>
            <ion-item>
              <ion-range min={1000} max={2000} steps={100} snaps={true} id="range" />
            </ion-item>
            <ion-item>
              <ion-range dual-knobs="true" id="multiKnob" />
            </ion-item>
            <ion-item>
              <ion-range id="debounce" debounce={5000} />
            </ion-item>
          </ion-list>

          <ion-button onClick={() => this.elTest()}>Test</ion-button>
        </ion-content>
      </div>
    );
  }
}
