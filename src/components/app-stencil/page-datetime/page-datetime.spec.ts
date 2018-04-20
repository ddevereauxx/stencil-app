import { render } from '@stencil/core/testing';
import { PageDatetime } from './page-datetime';

describe('page-datetime', () => {
  it('should build', () => {
    expect(new PageDatetime()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageDatetime],
        html: '<page-datetime></page-datetime>'
      });
    });
  });
});
