import { render } from '@stencil/core/testing';
import { PageActionSheet } from './page-action-sheet';

describe('page-action-sheet', () => {
  it('should build', () => {
    expect(new PageActionSheet()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageActionSheet],
        html: '<page-action-sheet></page-action-sheet>'
      });
    });
  });
});
