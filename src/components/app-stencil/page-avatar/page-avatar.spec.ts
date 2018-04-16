import { render } from '@stencil/core/testing';
import { PageAvatar } from './page-avatar';

describe('page-avatar', () => {
  it('should build', () => {
    expect(new PageAvatar()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageAvatar],
        html: '<page-avatar></page-avatar>'
      });
    });
  });
});
