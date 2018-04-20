import { render } from '@stencil/core/testing';
import { PageHideWhen } from './page-hide-when';

describe('page-hide-when', () => {
  it('should build', () => {
    expect(new PageHideWhen()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageHideWhen],
        html: '<page-hide-when></page-hide-when>'
      });
    });
  });
});
