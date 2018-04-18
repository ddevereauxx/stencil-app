import { render } from '@stencil/core/testing';
import { PageBadge } from './page-badge';

describe('page-badge', () => {
  it('should build', () => {
    expect(new PageBadge()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageBadge],
        html: '<page-badge></page-badge>'
      });
    });
  });
});
