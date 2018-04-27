import { render } from '@stencil/core/testing';
import { PageModal } from './page-modal';

describe('page-modal', () => {
  it('should build', () => {
    expect(new PageModal()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageModal],
        html: '<page-modal></page-modal>'
      });
    });
  });
});
