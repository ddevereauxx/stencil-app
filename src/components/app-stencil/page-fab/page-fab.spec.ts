import { render } from '@stencil/core/testing';
import { PageFab } from './page-fab';

describe('page-fab', () => {
  it('should build', () => {
    expect(new PageFab()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageFab],
        html: '<page-fab></page-fab>'
      });
    });
  });
});
