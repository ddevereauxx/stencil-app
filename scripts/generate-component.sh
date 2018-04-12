#!/bin/bash

path=$(dirname "$0")

if [ "$1" != "" ] ; then
  mkdir $path/../src/components/$1
  touch $path/../src/components/$1/$1.scss
  echo "import { render } from '@stencil/core/testing';
import { $2 } from './$1';

describe('$1', () => {
  it('should build', () => {
    expect(new $2()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [$2],
        html: '<$1></$1>'
      });
    });
  });
});" > $path/../src/components/$1/$1.spec.ts

  echo "import { Component } from '@stencil/core';


@Component({
  tag: '$1',
  styleUrl: '$1.scss'
})
export class $2 {
  componentDidLoad() {
    console.log('Component $2 was loaded');
  }

  render() {
    return (
      <div class=\"ion-page\">
        <ion-header>
          <ion-toolbar>
            <ion-title>$2</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <h2>$2</h2>
        </ion-content>
      </div>
    );
  }
}
" > $path/../src/components/$1/$1.tsx

fi
