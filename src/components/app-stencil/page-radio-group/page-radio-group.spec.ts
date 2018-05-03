import { render } from '@stencil/core/testing';
import { PageRadioGroup } from './page-radio-group';

describe('page-radio-group', () => {
  it('should build', () => {
    expect(new PageRadioGroup()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [PageRadioGroup],
        html: '<page-radio-group></page-radio-group>'
      });
    });
  });
});
