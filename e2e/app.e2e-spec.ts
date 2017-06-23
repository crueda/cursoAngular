import { browser, element, by } from 'protractor';
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

  it('Lista de usuarios', () => {
    browser.get('http://localhost:4200/login')
    element(by.id('username')).sendKeys('admin')
    element(by.id('password')).sendKeys('admin')
    element(by.id('login')).click()

    browser.get('http://localhost:4200/users')

    element(by.id('leer')).click()

    element.all(by .css('li')).then(function(items){
console.log(items);
      expect(items.length).toBe(13)
    })

  });

});
