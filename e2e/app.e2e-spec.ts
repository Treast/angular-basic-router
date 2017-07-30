import { ShivaAngularPage } from './app.po';

describe('shiva-angular App', () => {
  let page: ShivaAngularPage;

  beforeEach(() => {
    page = new ShivaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
