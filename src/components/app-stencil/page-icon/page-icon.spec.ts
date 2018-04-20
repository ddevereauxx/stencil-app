import { render } from '@stencil/core/testing';
import { PageIcon } from './page-icon';

describe('page-icon', () => {
  it('should build', () => {
    expect(new PageIcon()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageIcon],
        html: '<page-icon></page-icon>'
      });
    });
  });
});
