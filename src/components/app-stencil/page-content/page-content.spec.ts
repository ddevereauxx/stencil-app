import { render } from '@stencil/core/testing';
import { PageContent } from './page-content';

describe('page-content', () => {
  it('should build', () => {
    expect(new PageContent()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageContent],
        html: '<page-content></page-content>'
      });
    });
  });
});
