import { Component } from '@stencil/core';

@Component({
  tag: 'page-select'
})
export class PageSelect {
  componentDidLoad() {
    let pets: any = document.getElementById('pets');
    pets.value = ['bird', 'dog'];

    let customAlertSelect: any = document.getElementById('customAlertSelect');
    let customAlertOptions = {
      header: 'Pizza Toppings',
      subHeader: 'Select your toppings',
      message: '$1.00 per topping',
      translucent: true
    };
    customAlertSelect.interfaceOptions = customAlertOptions;

    let customPopoverSelect: any = document.getElementById('customPopoverSelect');
    let customPopoverOptions = {
      header: 'Pizza Toppings',
      subHeader: 'Select your toppings',
      message: '$1.50 charge for every topping'
    };
    customPopoverSelect.interfaceOptions = customPopoverOptions;

    let customActionSheetSelect: any = document.getElementById('customActionSheetSelect');
    let customActionSheetOptions = {
      header: 'Pizza Toppings',
      subHeader: 'Select your toppings',
      message: '$1.50 charge for every topping'
    };
    customActionSheetSelect.interfaceOptions = customActionSheetOptions;
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
            <ion-title>Select - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="outer-content test-content">
          <ion-list>
            <ion-list-header>Single Value Select</ion-list-header>

            <ion-item>
              <ion-label>Gender</ion-label>
              <ion-select id="gender" placeholder="Select One">
                <ion-select-option value="f">Female</ion-select-option>
                <ion-select-option value="m">Male</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Hair Color</ion-label>
              <ion-select id="hairColor" value="brown" ok-text="Okay" cancel-text="Dismiss">
                <ion-select-option value="brown" selected>
                  Brown
                </ion-select-option>
                <ion-select-option value="blonde">Blonde</ion-select-option>
                <ion-select-option value="black">Black</ion-select-option>
                <ion-select-option value="red">Red</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Skittles</ion-label>
              <ion-select id="customSelect" interface="action-sheet" name="skittles">
                <ion-select-option value="red">Red</ion-select-option>
                <ion-select-option value="purple">Purple</ion-select-option>
                <ion-select-option value="yellow">Yellow</ion-select-option>
                <ion-select-option value="orange">Orange</ion-select-option>
                <ion-select-option value="green">Green</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>Select - Custom Interface Options</ion-list-header>

            <ion-item>
              <ion-label>Alert</ion-label>
              <ion-select id="customAlertSelect" interface="alert" multiple={true} placeholder="Select One">
                <ion-select-option value="bacon">Bacon</ion-select-option>
                <ion-select-option value="olives">Black Olives</ion-select-option>
                <ion-select-option value="xcheese">Extra Cheese</ion-select-option>
                <ion-select-option value="peppers">Green Peppers</ion-select-option>
                <ion-select-option value="mushrooms">Mushrooms</ion-select-option>
                <ion-select-option value="onions">Onions</ion-select-option>
                <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
                <ion-select-option value="pineapple">Pineapple</ion-select-option>
                <ion-select-option value="sausage">Sausage</ion-select-option>
                <ion-select-option value="Spinach">Spinach</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Popover</ion-label>
              <ion-select id="customPopoverSelect" interface="popover" placeholder="Select One">
                <ion-select-option value="brown">Brown</ion-select-option>
                <ion-select-option value="blonde">Blonde</ion-select-option>
                <ion-select-option value="black">Black</ion-select-option>
                <ion-select-option value="red">Red</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Action Sheet</ion-label>
              <ion-select id="customActionSheetSelect" interface="action-sheet" placeholder="Select One">
                <ion-select-option value="red">Red</ion-select-option>
                <ion-select-option value="purple">Purple</ion-select-option>
                <ion-select-option value="yellow">Yellow</ion-select-option>
                <ion-select-option value="orange">Orange</ion-select-option>
                <ion-select-option value="green">Green</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>Popover Interface Select</ion-list-header>

            <ion-item>
              <ion-label>Gender</ion-label>
              <ion-select name="gender" interface="popover">
                <ion-select-option value="f">Female</ion-select-option>
                <ion-select-option value="m">Male</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Gaming</ion-label>
              <ion-select name="gaming" ok-text="Okay" cancel-text="Dismiss" value="n64" interface="popover">
                <ion-select-option value="nes">NES</ion-select-option>
                <ion-select-option value="n64">Nintendo64</ion-select-option>
                <ion-select-option value="ps">PlayStation</ion-select-option>
                <ion-select-option value="genesis">Sega Genesis</ion-select-option>
                <ion-select-option value="saturn">Sega Saturn</ion-select-option>
                <ion-select-option value="snes">SNES</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Date</ion-label>
              <ion-select placeholder="Month" interface="popover">
                <ion-select-option value="01">January</ion-select-option>
                <ion-select-option value="02">February</ion-select-option>
                <ion-select-option value="03" selected={true}>
                  March
                </ion-select-option>
                <ion-select-option value="04">April</ion-select-option>
                <ion-select-option value="05">May</ion-select-option>
                <ion-select-option value="06">June</ion-select-option>
                <ion-select-option value="07">July</ion-select-option>
                <ion-select-option value="08">August</ion-select-option>
                <ion-select-option value="09">September</ion-select-option>
                <ion-select-option value="10">October</ion-select-option>
                <ion-select-option value="11">November</ion-select-option>
                <ion-select-option value="12">December</ion-select-option>
              </ion-select>
              <ion-select placeholder="Year" interface="popover">
                <ion-select-option>1989</ion-select-option>
                <ion-select-option>1990</ion-select-option>
                <ion-select-option>1991</ion-select-option>
                <ion-select-option>1992</ion-select-option>
                <ion-select-option>1993</ion-select-option>
                <ion-select-option selected={true}>1994</ion-select-option>
                <ion-select-option>1995</ion-select-option>
                <ion-select-option>1996</ion-select-option>
                <ion-select-option>1997</ion-select-option>
                <ion-select-option>1998</ion-select-option>
                <ion-select-option>1999</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>Action Sheet Interface Select</ion-list-header>

            <ion-item>
              <ion-label>Mute Notifications</ion-label>
              <ion-select name="notifications" interface="action-sheet">
                <ion-select-option value="mute_15">For 15 Minutes</ion-select-option>
                <ion-select-option value="mute_1">For 1 Hour</ion-select-option>
                <ion-select-option value="mute_23">For 24 Hours</ion-select-option>
                <ion-select-option value="mute_inf">Until I turn it back on</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Rating</ion-label>
              <ion-select name="rating" interface="action-sheet">
                <ion-select-option value="1">1 Star</ion-select-option>
                <ion-select-option value="2">2 Stars</ion-select-option>
                <ion-select-option value="3">3 Stars</ion-select-option>
                <ion-select-option value="4">4 Stars</ion-select-option>
                <ion-select-option value="5">5 Stars</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>

          <ion-list>
            <ion-list-header>Multiple Value Select</ion-list-header>

            <ion-item>
              <ion-label>Toppings</ion-label>
              <ion-select name="toppings" multiple={true} cancel-text="Nah" ok-text="Okay!">
                <ion-select-option value="bacon">Bacon</ion-select-option>
                <ion-select-option value="olives">Black Olives</ion-select-option>
                <ion-select-option value="xcheese">Extra Cheese</ion-select-option>
                <ion-select-option value="peppers">Green Peppers</ion-select-option>
                <ion-select-option value="mushrooms">Mushrooms</ion-select-option>
                <ion-select-option value="onions">Onions</ion-select-option>
                <ion-select-option value="pepperoni">Pepperoni</ion-select-option>
                <ion-select-option value="pineapple">Pineapple</ion-select-option>
                <ion-select-option value="sausage">Sausage</ion-select-option>
                <ion-select-option value="Spinach">Spinach</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Pets</ion-label>
              <ion-select id="pets" name="pets" multiple={true}>
                <ion-select-option value="bird">Bird</ion-select-option>
                <ion-select-option value="cat">Cat</ion-select-option>
                <ion-select-option value="dog">Dog</ion-select-option>
                <ion-select-option value="honeybadger">Honey Badger</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label>Disabled</ion-label>
              <ion-select multiple disabled={true} id="dynamicDisabled">
                <ion-select-option selected={true}>Selected Text</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Stacked</ion-label>
              <ion-select>
                <ion-select-option>Default</ion-select-option>
                <ion-select-option>Other</ion-select-option>
                <ion-select-option>N/A</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Floating</ion-label>
              <ion-select>
                <ion-select-option>Default</ion-select-option>
                <ion-select-option>Other</ion-select-option>
                <ion-select-option>N/A</ion-select-option>
              </ion-select>
            </ion-item>

            <ion-item>
              <ion-label position="floating">Floating</ion-label>
              <ion-select>
                <ion-select-option selected={true}>Default</ion-select-option>
                <ion-select-option>Other</ion-select-option>
                <ion-select-option>N/A</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>

          <div text-center>
            <ion-button onClick={() => this.toggleBoolean('dynamicDisabled', 'disabled')}>Toggle Disabled</ion-button>
          </div>
        </ion-content>
      </div>
    );
  }
}
