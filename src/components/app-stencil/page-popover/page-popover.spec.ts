import { render } from '@stencil/core/testing';
import { PagePopover } from './page-popover';

describe('page-popover', () => {
  it('should build', () => {
    expect(new PagePopover()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PagePopover],
        html: '<page-popover></page-popover>'
      });
    });
  });
});
