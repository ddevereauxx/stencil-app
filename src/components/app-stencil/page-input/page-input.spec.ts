import { render } from '@stencil/core/testing';
import { PageInput } from './page-input';

describe('page-input', () => {
  it('should build', () => {
    expect(new PageInput()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageInput],
        html: '<page-input></page-input>'
      });
    });
  });
});
