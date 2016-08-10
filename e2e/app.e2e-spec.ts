import { InstaFeed2Page } from './app.po';

describe('insta-feed2 App', function() {
  let page: InstaFeed2Page;

  beforeEach(() => {
    page = new InstaFeed2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
