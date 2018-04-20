import { Component } from '@stencil/core';


@Component({
  tag: 'page-grid',
  styleUrl: 'page-grid.scss'
})
export class PageGrid {
  componentDidLoad() {
    console.log('Component PageGrid was loaded');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-content padding class="grid-demo">
          <h2>PageGrid</h2>

          <ion-grid>
            <ion-row>
              <ion-col>
                <div>
                  ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col
                </div>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col col-6>
                <div>
                  ion-col[width-50]
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col
                </div>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col col-3>
                <div>
                  ion-col[width-25]
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col
                </div>
              </ion-col>
              <ion-col col-3>
                <div>
                  ion-col[width-25]
                </div>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col col-3>
                <div>
                  ion-col[width-25]
                </div>
              </ion-col>
              <ion-col col-3 offset-3>
                <div>
                  ion-col[width-25][offset-25]
                </div>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <div>
                  ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col<br />#
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col<br />#<br />#
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col<br />#<br />#<br />#
                </div>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col align-self-start>
                <div>
                  ion-col[top]
                </div>
              </ion-col>
              <ion-col align-self-center>
                <div>
                  ion-col[center]
                </div>
              </ion-col>
              <ion-col align-self-end>
                <div>
                  ion-col[bottom]
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col<br />#<br />#
                </div>
              </ion-col>
            </ion-row>

            <ion-row align-items-start>
              <ion-col>
                <div>
                  [top] ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  [top] ion-col
                </div>
              </ion-col>
              <ion-col align-self-end>
                <div>
                  [top] ion-col[bottom]
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col<br />#<br />#
                </div>
              </ion-col>
            </ion-row>

            <ion-row align-items-center>
              <ion-col>
                <div>
                  [center] ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  [center] ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  [center] ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col<br />#<br />#
                </div>
              </ion-col>
            </ion-row>

            <ion-row align-items-end>
              <ion-col>
                <div>
                  [bottom] ion-col
                </div>
              </ion-col>
              <ion-col align-self-start>
                <div>
                  [bottom] ion-col[top]
                </div>
              </ion-col>
              <ion-col>
                <div>
                  [bottom] ion-col
                </div>
              </ion-col>
              <ion-col>
                <div>
                  ion-col<br />#<br />#
                </div>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col col-12 col-sm>
                <div>
                  [responsive-sm] ion-col
                </div>
              </ion-col>
              <ion-col col-12 col-sm>
                <div>
                  [responsive-sm] ion-col
                </div>
              </ion-col>
              <ion-col col-12 col-sm>
                <div>
                  [responsive-sm] ion-col
                </div>
              </ion-col>
              <ion-col col-12 col-sm>
                <div>
                  [responsive-sm] ion-col
                </div>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col col-12 col-md>
                <div>
                  [responsive-md] ion-col
                </div>
              </ion-col>
              <ion-col col-12 col-md>
                <div>
                  [responsive-md] ion-col
                </div>
              </ion-col>
              <ion-col col-12 col-md>
                <div>
                  [responsive-md] ion-col
                </div>
              </ion-col>
              <ion-col col-12 col-md>
                <div>
                  [responsive-md] ion-col
                </div>
              </ion-col>
            </ion-row>

            <ion-row responsive-lg>
              <ion-col col-6 offset-3>
                <div>
                  [responsive-lg] ion-col[width-50][offset-25]
                </div>
              </ion-col>
              <ion-col col-3>
                <div>
                  [responsive-lg] ion-col[width-25]
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </div>
    );
  }
}
