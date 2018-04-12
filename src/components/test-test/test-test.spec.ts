import { render } from '@stencil/core/testing';
import { TestTest } from './test-test';

describe('test-test', () => {
  it('should build', () => {
    expect(new TestTest()).toBeTruthy();
  });

  describe('rendering', () => {
    beforeEach(async () => {
      await render({
        components: [TestTest],
        html: '<test-test></test-test>'
      });
    });
  });
});
