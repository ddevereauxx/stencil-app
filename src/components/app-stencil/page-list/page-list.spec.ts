import { render } from '@stencil/core/testing';
import { PageList } from './page-list';

describe('page-list', () => {
  it('should build', () => {
    expect(new PageList()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageList],
        html: '<page-list></page-list>'
      });
    });
  });
});
