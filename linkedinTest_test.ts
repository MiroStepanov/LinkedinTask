import { WASI } from "wasi";

Feature('LinkedIn Job Search');

Scenario('Search for jobs and open the first job link', async ({ I }) => {
 
  I.amOnPage('https://www.linkedin.com');
  I.click('a.nav__button-secondary');
  I.fillField('input#username', 'miroslavstepanov29@gmail.com'); 
  I.fillField('input#password', 'MyLinkedin123!'); 
  I.click('button[type="submit"]');
  I.click('//li[contains(@class, "global-nav__primary-item")]//span[text()="Jobs"]');
  I.click('//*[@aria-label="Search by title, skill, or company"]');
  I.fillField('//input[@aria-label="City, state, or zip code"]', 'Milan, Lombardy, Italy');
  I.waitForElement('//button[contains(@class, "jobs-search-box__typeahead-suggestion") and text()[contains(., "Milan, Lombardy, Italy")]]', 3);
  I.click('//button[contains(@class, "jobs-search-box__typeahead-suggestion") and text()[contains(., "Milan, Lombardy, Italy")]]');
  I.waitForElement('.jobs-search-results__list-item', 10);
  I.click(locate('.jobs-search-results__list-item').first().find('a'));
  I.click('//*[contains(@class, "artdeco-button__icon") and contains(@class, "rtl-flip")]');
  I.waitForElement('//li[contains(@class, "social-share__item--copy-link") and @role="menuitem"]', 10);
  I.click('//li[contains(@class, "social-share__item--copy-link") and @role="menuitem"]');
  const copiedLink = await I.executeScript(() => navigator.clipboard.readText());
  I.openNewTab();
  I.amOnPage(copiedLink);
  I.seeInCurrentUrl('linkedin.com/jobs/view');

 });



