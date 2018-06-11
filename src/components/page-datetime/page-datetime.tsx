import { Component } from '@stencil/core';

@Component({
  tag: 'page-datetime'
})
export class PageDatetime {
  yearValuesArray: any = [2020, 2016, 2008, 2004, 2000, 1996];
  dayShortNamesArray: any = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

  customYearValues: any;
  customDayShortNames: any;
  customPickerOptions: any;
  customPickerButtons: any = {
    buttons: [
      {
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      },
      {
        text: 'Log',
        handler: () => {
          console.log("Clicked Log. Don't Dismiss.");
          return false;
        }
      }
    ]
  };

  componentDidLoad() {
    this.customYearValues = document.getElementById('customYearValues');
    this.customYearValues.yearValues = this.yearValuesArray;

    this.customDayShortNames = document.getElementById('customDayShortNames');
    this.customDayShortNames.dayShortNames = this.dayShortNamesArray;

    this.customPickerOptions = document.getElementById('customPickerOptions');
    this.customPickerOptions.pickerOptions = this.customPickerButtons;
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
            <ion-title>Datetime - Basic</ion-title>
            <ion-buttons slot="primary">
              <ion-button onClick={() => this.toggleBoolean('dynamicDisabled', 'disabled')}>(disabled)</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content" class="outer-content test-content">
          <ion-list>
            <ion-item>
              <ion-label>MMMM</ion-label>
              <ion-datetime display-format="MMMM" value="2012-12-15T13:47:20.789" />
            </ion-item>

            <ion-item>
              <ion-label>MM DD YY</ion-label>
              <ion-datetime display-format="MM DD YY" placeholder="Select Date" />
            </ion-item>

            <ion-item>
              <ion-label>Disabled</ion-label>
              <ion-datetime id="dynamicDisabled" display-format="MM DD YY" disabled value="1994-12-15" />
            </ion-item>

            <ion-item>
              <ion-label>YYYY</ion-label>
              <ion-datetime id="customPickerOptions" placeholder="Custom Options" display-format="YYYY" min="1981" max="2002" />
            </ion-item>

            <ion-item>
              <ion-label position="stacked">MMMM YY</ion-label>
              <ion-datetime display-format="MMMM YY" min="1989-06-04" max="2004-08-23" value="1994-12-15T13:47:20.789" />
            </ion-item>

            <ion-item>
              <ion-label position="floating">MM/DD/YYYY</ion-label>
              <ion-datetime display-format="MM/DD/YYYY" min="1994-03-14" max="2012-12-09" value="2002-09-23T15:03:46.789" class="e2eOpenMMDDYYYY" />
            </ion-item>

            <ion-item>
              <ion-label position="floating">MM/DD/YYYY</ion-label>
              <ion-datetime display-format="MM/DD/YYYY" min="1994-03-14" max="2012-12-09" class="e2eOpenMMDDYYYY" />
            </ion-item>

            <ion-item>
              <ion-label>DDD. MMM DD, YY (custom locale)</ion-label>
              <ion-datetime
                id="customDayShortNames"
                value="1995-04-15"
                min="1990-02"
                max="2000"
                display-format="DDD. MMM DD, YY"
                month-short-names="jan, feb, mar, apr, mai, jun, jul, aug, sep, okt, nov, des"
              />
            </ion-item>

            <ion-item>
              <ion-label>D MMM YYYY H:mm</ion-label>
              <ion-datetime display-format="D MMM YYYY H:mm" min="1997" max="2010" value="2005-06-17T11:06Z" />
            </ion-item>

            <ion-item>
              <ion-label>DDDD MMM D, YYYY</ion-label>
              <ion-datetime display-format="DDDD MMM D, YYYY" min="2005" max="2016" value="2008-09-02" />
            </ion-item>

            <ion-item>
              <ion-label>HH:mm</ion-label>
              <ion-datetime display-format="HH:mm" />
            </ion-item>

            <ion-item>
              <ion-label>h:mm a</ion-label>
              <ion-datetime display-format="h:mm a" />
            </ion-item>

            <ion-item>
              <ion-label>hh:mm A (15 min steps)</ion-label>
              <ion-datetime display-format="h:mm A" minute-values="0,15,30,45" />
            </ion-item>

            <ion-item>
              <ion-label>Leap years, summer months</ion-label>
              <ion-datetime id="customYearValues" display-format="MM/YYYY" pickerFormat="MMMM YYYY" month-values="6,7,8" />
            </ion-item>

            <ion-item>
              <ion-label>Specific days/months/years</ion-label>
              <ion-datetime month-values="6,7,8" year-values="2014,2015" day-values="01,02,03,04,05,06,08,09,10, 11, 12, 13, 14" display-format="DD/MMM/YYYY" />
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-item>
              <ion-label>myDate</ion-label>
              <ion-datetime display-format="MMM DD, YYYY HH:mm" />
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-item>
              <ion-label>HH:mm:ss</ion-label>
              <ion-datetime display-format="HH:mm:ss" />
            </ion-item>

            <ion-item>
              <ion-label>No display-format</ion-label>
              <ion-datetime />
            </ion-item>
          </ion-list>
        </ion-content>
      </div>
    );
  }
}