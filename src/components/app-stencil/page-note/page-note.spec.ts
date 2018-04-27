import { render } from '@stencil/core/testing';
import { PageNote } from './page-note';

describe('page-note', () => {
  it('should build', () => {
    expect(new PageNote()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageNote],
        html: '<page-note></page-note>'
      });
    });
  });
});
