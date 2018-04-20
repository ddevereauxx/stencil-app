import { render } from '@stencil/core/testing';
import { PageGrid } from './page-grid';

describe('page-grid', () => {
  it('should build', () => {
    expect(new PageGrid()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageGrid],
        html: '<page-grid></page-grid>'
      });
    });
  });
});
