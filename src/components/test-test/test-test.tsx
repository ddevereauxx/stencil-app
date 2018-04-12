import { Component } from '@stencil/core';


@Component({
  tag: 'test-test',
  styleUrl: 'test-test.scss'
})
export class TestTest {
  menu: any;

  componentDidLoad() {
    console.log('Component TestTest was loaded');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>TestTest</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <h2>TestTest</h2>
        </ion-content>
      </div>
    );
  }
}

