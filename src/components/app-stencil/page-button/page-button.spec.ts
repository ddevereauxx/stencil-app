import { render } from '@stencil/core/testing';
import { PageButton } from './page-button';

describe('page-button', () => {
  it('should build', () => {
    expect(new PageButton()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageButton],
        html: '<page-button></page-button>'
      });
    });
  });
});
