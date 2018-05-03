import { Component } from '@stencil/core';


@Component({
  tag: 'page-icon',
  styleUrl: 'page-icon.css'
})
export class PageIcon {
  dynamicColor: any;
  dynamicHomeIcon: any;
  icons: any;
  iconIndex: any;
  dynamicBtnIcon: any;

  componentDidLoad() {
    this.dynamicColor = document.getElementById('dynamicColor');
    this.dynamicColor.color = 'danger';

    this.dynamicHomeIcon = document.getElementById('dynamicHomeIcon');
    this.dynamicHomeIcon.name = 'home';
    this.dynamicHomeIcon.isActive = false;

    this.icons = [
      'home',
      'star',
      'ios-alert',
      'ios-alert-outline',
      'md-alert',
      'logo-apple'
    ];

    this.iconIndex = 0;

    this.dynamicBtnIcon = document.getElementById('dynamicBtnIcon');
    this.dynamicBtnIcon.name = this.icons[0];
  }

  updateIcon() {
    this.iconIndex++;
    if (this.iconIndex >= this.icons.length) {
      this.iconIndex = 0;
    }
    this.dynamicBtnIcon.name = this.icons[this.iconIndex];
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content padding>
          <h2>PageIcon</h2>

          <ion-list>
            <ion-item>
              <ion-icon name="home" id="dynamicColor" slot="start"></ion-icon>
              <ion-label>
                <code>
                  name="home"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="home" slot="start"></ion-icon>
              <ion-label>
                <code>
                  name="home"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon id="dynamicHomeIcon" slot="start"></ion-icon>
              <ion-label>
                <code>
                  id="dynamicHomeIcon"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="md-home" slot="start"></ion-icon>
              <ion-label>
                <code>
                  name="md-home"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="ios-home" slot="start"></ion-icon>
              <ion-label>
                <code>
                  name="ios-home"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="ios-home" slot="end"></ion-icon>
              <ion-label>
                <code>
                  name="ios-home"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="ios-star-outline" slot="start"></ion-icon>
              <ion-label>
                <code>
                  name="ios-star-outline"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="IOS-STAR-OUTLINE" slot="end"></ion-icon>
              <ion-label>
                <code>
                  name="IOS-STAR-OUTLINE"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="md-home" color="primary" slot="start"></ion-icon>
              <ion-label>
                <code>
                  name="md-home"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="logo-twitter" color="secondary" slot="start"></ion-icon>
              <ion-label>
                <code>
                  name="logo-twitter"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon ios="logo-apple" md="logo-android" slot="start"></ion-icon>
              <ion-label>
                <code>
                  ios="logo-apple" md="logo-android"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon name="color-filter" slot="start"></ion-icon>
              <ion-label>
                <code>
                  name="color-filter"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon ios="ios-color-filter" md="md-color-filter" slot="start"></ion-icon>
              <ion-label>
                <code>
                  ios="ios-color-filter" md="md-color-filter"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon ios="MD-COLOR-FILTER" md="IOS-COLOR-FILTER" slot="start"></ion-icon>
              <ion-label>
                <code>
                  ios="MD-COLOR-FILTER" md="IOS-COLOR-FILTER"
                </code>
              </ion-label>
            </ion-item>

            <ion-item>
              <ion-icon slot="start"></ion-icon>
              <ion-label>
                <code>
                  name="null"
                </code>
              </ion-label>
            </ion-item>

            <ion-item detail={true}>
              <ion-label>
                <code>
                  ion-item w/ [detail="true"] attr. text text text text text text
                </code>
              </ion-label>
            </ion-item>
          </ion-list>

          <p>
            <ion-button onClick={() => this.updateIcon()}>
              <ion-icon slot="start" id="dynamicBtnIcon"></ion-icon>
              Update icon
            </ion-button>
          </p>
        </ion-content>
      </div>
    );
  }
}
