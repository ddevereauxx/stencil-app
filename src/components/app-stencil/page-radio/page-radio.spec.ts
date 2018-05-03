import { render } from '@stencil/core/testing';
import { PageRadio } from './page-radio';

describe('page-radio', () => {
  it('should build', () => {
    expect(new PageRadio()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageRadio],
        html: '<page-radio></page-radio>'
      });
    });
  });
});
