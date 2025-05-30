import {Given} from "@cucumber/cucumber"

Given(/^I am on "([^"]*)" page$/,async function(pageId: string) {

    const{
        screen: {page},
    } = this;

    console.log(`I am on the ${pageId} page`);
    await page.goto("http://localhost:3000/");
})