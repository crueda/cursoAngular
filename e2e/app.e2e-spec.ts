import { CursoAngularPage } from './app.po';

describe('curso-angular App', () => {
  let page: CursoAngularPage;

  beforeEach(() => {
    page = new CursoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
