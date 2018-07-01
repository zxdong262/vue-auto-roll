const Vue = require('vue');
const utils = require('../utils');

const ExampleMessage = require('../../../src/ExampleMessageComponent.vue');

describe('Example Message', () => {
  it('should mount successfully', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(ExampleMessage),
    });
    const carouselInstance = vm.$children[0];
    expect(carouselInstance._isMounted).toBe(true);

    return utils.expectToMatchSnapshot(vm);
  });
});
