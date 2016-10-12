import { FirebaseBusinessListingsPage } from './app.po';

describe('firebase-business-listings App', function() {
  let page: FirebaseBusinessListingsPage;

  beforeEach(() => {
    page = new FirebaseBusinessListingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
