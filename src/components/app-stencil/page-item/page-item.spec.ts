import { render } from '@stencil/core/testing';
import { PageItem } from './page-item';

describe('page-item', () => {
  it('should build', () => {
    expect(new PageItem()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageItem],
        html: '<page-item></page-item>'
      });
    });
  });
});
