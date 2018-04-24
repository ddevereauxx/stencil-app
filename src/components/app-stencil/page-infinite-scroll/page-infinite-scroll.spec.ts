import { render } from '@stencil/core/testing';
import { PageInfiniteScroll } from './page-infinite-scroll';

describe('page-infinite-scroll', () => {
  it('should build', () => {
    expect(new PageInfiniteScroll()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageInfiniteScroll],
        html: '<page-infinite-scroll></page-infinite-scroll>'
      });
    });
  });
});
