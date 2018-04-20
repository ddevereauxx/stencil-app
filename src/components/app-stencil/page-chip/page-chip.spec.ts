import { render } from '@stencil/core/testing';
import { PageChip } from './page-chip';

describe('page-chip', () => {
  it('should build', () => {
    expect(new PageChip()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageChip],
        html: '<page-chip></page-chip>'
      });
    });
  });
});
