import { render } from '@stencil/core/testing';
import { PageAlert } from './page-alert';

describe('page-alert', () => {
  it('should build', () => {
    expect(new PageAlert()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageAlert],
        html: '<page-alert></page-alert>'
      });
    });
  });
});
