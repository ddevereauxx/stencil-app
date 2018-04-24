import { render } from '@stencil/core/testing';
import { PageItemSliding } from './page-item-sliding';

describe('page-item-sliding', () => {
  it('should build', () => {
    expect(new PageItemSliding()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageItemSliding],
        html: '<page-item-sliding></page-item-sliding>'
      });
    });
  });
});
