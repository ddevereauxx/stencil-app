import { Component } from '@stencil/core';

@Component({
  tag: 'page-skeleton-text'
})
export class PageSkeletonText {
  render() {
    return (
      <div class="ion-page">
        <ion-skeleton-text width="40px" />
        <ion-skeleton-text width="200px" />
        <ion-skeleton-text width="600px" />
        <ion-skeleton-text width="100px" />
        <ion-skeleton-text width="80px" />
      </div>
    );
  }
}
