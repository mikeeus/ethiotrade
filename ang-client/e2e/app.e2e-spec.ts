import { AngClientPage } from './app.po';

describe('ang-client App', function() {
  let page: AngClientPage;

  beforeEach(() => {
    page = new AngClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
