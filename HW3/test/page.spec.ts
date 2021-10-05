import {Page} from '../src/page';

describe('Page', () => {
  it('toString should return correct value', () => {
    const page = new Page(3, 'with text', 'glossy paper');

    expect(page.toString()).toEqual('here is page with text #3 and it\'s material is glossy paper');
  });
});
