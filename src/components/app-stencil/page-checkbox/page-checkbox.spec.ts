import { render } from '@stencil/core/testing';
import { PageCheckbox } from './page-checkbox';

describe('page-checkbox', () => {
  it('should build', () => {
    expect(new PageCheckbox()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageCheckbox],
        html: '<page-checkbox></page-checkbox>'
      });
    });
  });
});
