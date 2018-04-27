import { render } from '@stencil/core/testing';
import { PageLoading } from './page-loading';

describe('page-loading', () => {
  it('should build', () => {
    expect(new PageLoading()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageLoading],
        html: '<page-loading></page-loading>'
      });
    });
  });
});
