import { render } from '@stencil/core/testing';
import { AppStencil } from './app-stencil';

describe('app-stencil', () => {
  it('should build', () => {
    expect(new AppStencil()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [AppStencil],
        html: '<app-stencil></app-stencil>'
      });
    });
  });
});
