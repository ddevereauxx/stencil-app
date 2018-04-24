import { render } from '@stencil/core/testing';
import { PageLabel } from './page-label';

describe('page-label', () => {
  it('should build', () => {
    expect(new PageLabel()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageLabel],
        html: '<page-label></page-label>'
      });
    });
  });
});
