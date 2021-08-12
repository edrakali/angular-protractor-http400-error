import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';
import { sleep } from './functions';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('angular-protractor-http400-error');
  });

  it('should not allow registering if email already exists', async () => {
    element(by.css('#register')).click()
    expect(element(by.css('#error')).getText()).toContain('email already exists')
    
  })

  it('should sleep a bit without errors', async () =>{
    await sleep(3000);
  })


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
