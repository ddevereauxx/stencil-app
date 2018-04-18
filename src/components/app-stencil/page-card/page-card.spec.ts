import { render } from '@stencil/core/testing';
import { PageCard } from './page-card';

describe('page-card', () => {
  it('should build', () => {
    expect(new PageCard()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageCard],
        html: '<page-card></page-card>'
      });
    });
  });
});
