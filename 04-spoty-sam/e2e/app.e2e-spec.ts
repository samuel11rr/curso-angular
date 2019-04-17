import { SpotySamPage } from './app.po';

describe('spoty-sam App', () => {
  let page: SpotySamPage;

  beforeEach(() => {
    page = new SpotySamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
