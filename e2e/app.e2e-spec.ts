import { TemplateSiteAppPage } from './app.po';

describe('template-site-app App', function() {
  let page: TemplateSiteAppPage;

  beforeEach(() => {
    page = new TemplateSiteAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
