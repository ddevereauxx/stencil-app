import { Component } from '@stencil/core';


@Component({
  tag: 'page-searchbar'
})
export class PageSearchbar {
  componentDidLoad() {
    const searchbars = document.querySelectorAll('ion-searchbar')
  for (let i = 0; i < searchbars.length; i++) {
    searchbars[i].addEventListener('ionChange', (ev) => {
      console.log(ev);
    })
  }
  }

  toggleAttr() {
    var dynamicAttr = document.getElementById('dynamicAttr');

    // Toggle animated attribute
    const attrIsAnimated = dynamicAttr.getAttribute('animated') === 'true' ? false : true;
    dynamicAttr.setAttribute('animated', attrIsAnimated.toString());

    // Toggle show-cancel-button attribute
    const attrShowCancel = dynamicAttr.getAttribute('show-cancel-button') === 'true' ? false : true;
    dynamicAttr.setAttribute('show-cancel-button', attrShowCancel.toString());

    // Toggle placeholder attribute
    const attrPlaceholder = dynamicAttr.getAttribute('placeholder') === 'Search' ? 'Enter a Search Term' : 'Search';
    dynamicAttr.setAttribute('placeholder', attrPlaceholder);
  }

  toggleProp() {
    var dynamicProp: any = document.getElementById('dynamicProp');
    console.log(dynamicProp.autocorrect, dynamicProp.autocomplete, dynamicProp.spellcheck);

    // Toggle autocorrect property
    const propIsAutocorrect = dynamicProp.autocorrect === 'on' ? 'off' : 'on';
    dynamicProp.autocorrect = propIsAutocorrect;

    // Toggle autocomplete property
    const propIsAutocomplete = dynamicProp.autocomplete === 'on' ? 'off' : 'on';
    dynamicProp.autocomplete = propIsAutocomplete;

    // Toggle spellcheck property
    const propIsSpellcheck = dynamicProp.spellcheck === true ? false : true;
    dynamicProp.spellcheck = propIsSpellcheck;
  }

  render() {
    return (
      <div class="ion-page">
      <ion-header>
        <ion-toolbar>
          <ion-title>Searchbar - Basic</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content id="content">
        <h5 padding-left padding-top> Search - Default </h5>
        <ion-searchbar value="test" type="tel" show-cancel-button debounce={500}>
        </ion-searchbar>

        <h5 padding-left padding-top> Search - Animated </h5>
        <ion-searchbar animated={true} show-cancel-button debounce={500}>
        </ion-searchbar>

        <h5 padding-left padding-top> Search - Custom Placeholder </h5>
        <ion-searchbar id="dynamicProp" value="33" autocorrect="on" show-cancel-button="true" autocomplete="on" spellcheck={false} type="number" placeholder="Filter Schedules">
        </ion-searchbar>

        <h5 padding-left padding-top> Search - No Cancel Button </h5>
        <ion-searchbar value="after view" autocorrect="off" autocomplete="off" spellcheck={true} type="text" show-cancel-button="false">
        </ion-searchbar>

        <h5 padding-left padding-top> Search - Custom Cancel Button Danger </h5>
        <ion-searchbar show-cancel-button cancel-button-text="Really Long Cancel" color="danger">
        </ion-searchbar>

        <h5 padding-left padding-top> Search - Value passed </h5>
        <ion-searchbar value="mysearch" cancel-button-text="Really Long Cancel" color="dark" show-cancel-button>
        </ion-searchbar>

        <h5 padding-left padding-top> Search - Mode iOS</h5>
        <ion-searchbar mode="ios" animated={true} show-cancel-button placeholder="Search">
        </ion-searchbar>

        <h5 padding-left padding-top> Search - Mode MD</h5>
        <ion-searchbar mode="md" animated={true} show-cancel-button placeholder="Search">
        </ion-searchbar>

        <h5 padding-left padding-top> Search - DebounceTime </h5>
        <ion-searchbar autocorrect="on" show-cancel-button="true" autocomplete="on" spellcheck={true} type="text" debounce={5000} placeholder="Check the log">
        </ion-searchbar>

        <h5 padding-left padding-top> Search - Animated and No Cancel</h5>
        <ion-searchbar id="dynamicAttr" placeholder="Search" animated={true} show-cancel-button="false">
        </ion-searchbar>

        <p padding>
          <ion-button expand="block" onClick={() => true}>Change Value</ion-button>
        </p>

        <div padding-horizontal>
          <ion-button expand="block" onClick={() => this.toggleProp()}>Toggle Property</ion-button>
        </div>
        <div padding>
          <ion-button expand="block" color="secondary" onClick={() => this.toggleAttr()}>Toggle Attribute</ion-button>
        </div>
      </ion-content>
      </div>
    );
  }
}

