import { AngularAppAuthenticationPage } from './app.po';

describe('angular-app-authentication App', () => {
  let page: AngularAppAuthenticationPage;

  beforeEach(() => {
    page = new AngularAppAuthenticationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
