import { EthiotradePage } from './app.po';

describe('ethiotrade App', function() {
  let page: EthiotradePage;

  beforeEach(() => {
    page = new EthiotradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
