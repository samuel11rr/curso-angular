import { MiselaneosPage } from './app.po';

describe('miselaneos App', () => {
  let page: MiselaneosPage;

  beforeEach(() => {
    page = new MiselaneosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
