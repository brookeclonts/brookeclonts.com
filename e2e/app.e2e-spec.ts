import { BrookeclontsPage } from './app.po';

describe('brookeclonts App', function() {
  let page: BrookeclontsPage;

  beforeEach(() => {
    page = new BrookeclontsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
