import { MemePage } from './app.po';

describe('meme App', () => {
  let page: MemePage;

  beforeEach(() => {
    page = new MemePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
