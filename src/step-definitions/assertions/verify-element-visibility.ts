import {Then} from "@cucumber/cucumber"
import {expect} from "@playwright/test"

Then(/^I should see "([^"]*)" page contains text "(.*)"$/, async function(elementKey : string, expectedElementtext : string)  {

    const{
        screen : {page},
    }= this;

    console.log(`${elementKey} page should display text ${expectedElementtext}`);

    const content = await page.textContent("[data-id='contacts']");

    expect(content).toBe(expectedElementtext)
})


Then(/^I should see "(.*)" on the page$/, async function(elementLogo : string) {

    const{
        screen: {page},
    }= this;
    console.log(`I should see ${elementLogo} on the page`);
    const logo = page.locator("[class='testing-talks-logo']");
    await expect(logo).toBeVisible();
})