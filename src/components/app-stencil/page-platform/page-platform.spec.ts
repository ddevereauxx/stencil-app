import { render } from '@stencil/core/testing';
import { PagePlatform } from './page-platform';

describe('page-platform', () => {
  it('should build', () => {
    expect(new PagePlatform()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PagePlatform],
        html: '<page-platform></page-platform>'
      });
    });
  });
});
