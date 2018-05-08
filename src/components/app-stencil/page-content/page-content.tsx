import { Component } from '@stencil/core';


@Component({
  tag: 'page-content',
  styleUrl: 'page-content.css'
})
export class PageContent {
  header: any;
  content: any;
  footer: any;

  componentDidLoad() {
    this.header = document.getElementById('header');
    this.content = document.getElementById('content');
    this.footer = document.getElementById('footer');

    this.content.scrollEvents = true;
    this.content.addEventListener('ionScrollStart', () => console.log('scroll start'));
    this.content.addEventListener('ionScroll', (ev) => console.log('scroll', ev.detail));
    this.content.addEventListener('ionScrollEnd', () => console.log('scroll end'));
  }

  toggleFullscreen() {
    this.content.fullscreen = !this.content.fullscreen;
    console.log('content.fullscren =', this.content.fullscreen);
  }
  toggleDisplay(id) {
    const el = document.getElementById(id);
    el.style.display = (!el.style.display) ? 'none' : null;
  }
  myanimation() {
    this.content.classList.add('animation');
    this.header.classList.add('animation');
    this.footer.classList.add('animation');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header id="header">
          <ion-toolbar style={{display: 'none'}} id="toolbar2">
            <ion-title>Hidden Toolbar</ion-title>
          </ion-toolbar>
          <ion-toolbar>
            <ion-title>Content - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <div style={{display: 'flex', flex: '1'}}>
          <ion-content padding style={{'text-align': 'center', flex: '2'}} id="content">
            <f></f>
            <ion-button onClick={() => this.toggleFullscreen()}>Toggle content.fullscreen</ion-button>
            <p>
              <ion-button onClick={() => this.toggleDisplay('header')} color="secondary">Toggle header</ion-button>
              <ion-button onClick={() => this.toggleDisplay('footer')} color="secondary">Toggle footer</ion-button>
              <ion-button onClick={() => this.toggleDisplay('toolbar2')} color="secondary">Toggle 2nd toolbar</ion-button>
            </p>
            <p>
              <ion-button onClick={() => this.toggleDisplay('content2')} color="danger">Toggle bottom content</ion-button>
              <ion-button onClick={() => this.toggleDisplay('content3')} color="danger">Toggle right content</ion-button>
            </p>
            <p>
              <ion-button onClick={() => this.myanimation()} color="dark">Animate</ion-button>
            </p>
            <f></f>
            <f></f>
            <f></f>
            <f></f>
            <f></f>
            <f></f>
            <f></f>
            <f></f>
          </ion-content>
          <ion-content padding style={{display: 'none'}} id="content3">
            <f></f>
            <f></f>
            <f></f>
            <f></f>
            <f></f>
            <f></f>
          </ion-content>
        </div>

        <ion-content padding style={{display: 'none'}} id="content2">
          <f></f>
          <f></f>
          <f></f>
          <f></f>
          <f></f>
          <f></f>
        </ion-content>

        <ion-footer id="footer">
          <ion-toolbar>
            <ion-title>Footer</ion-title>
          </ion-toolbar>
        </ion-footer>
      </div>
    );
  }
}
