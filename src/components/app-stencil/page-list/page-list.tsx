import { Component } from '@stencil/core';


@Component({
  tag: 'page-list',
  styleUrl: 'page-list.css'
})
export class PageList {
  componentDidLoad() {
    console.log('Component PageList was loaded');
  }

  render() {
    return (
      <div class="ion-page">
        <ion-header>
          <ion-toolbar>
            <ion-title>List - Basic</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content id="content">
          <ion-list>
            <ion-item>Pokémon Yellow</ion-item>
            <ion-item>Super Metroid</ion-item>
            <ion-item>Mega Man X</ion-item>
            <ion-item>The Legend of Zelda</ion-item>
            <ion-item>Pac-Man</ion-item>
            <ion-item>Super Mario World</ion-item>
            <ion-item>Street Fighter II</ion-item>
            <ion-item>Half Life</ion-item>
            <ion-item>Portal</ion-item>
            <ion-item>Final Fantasy VII</ion-item>
            <ion-item>Star Fox</ion-item>
            <ion-item>Tetris</ion-item>
            <ion-item>Donkey Kong III</ion-item>
            <ion-item>Goldeneye 007</ion-item>
            <ion-item>Doom</ion-item>
            <ion-item>Fallout</ion-item>
            <ion-item>GTA</ion-item>
            <ion-item>Halo</ion-item>
          </ion-list>
        </ion-content>
      </div>
    );
  }
}
