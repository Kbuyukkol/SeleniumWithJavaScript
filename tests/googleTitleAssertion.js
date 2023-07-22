const { Builder, By } = require('selenium-webdriver');
const chai = require('chai');
const { expect } = chai;

async function getTitleExample() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.google.com/');

        // Get the title of the page
        const title = await driver.getTitle();

        // Use Chai to perform the assertion on the title
        expect(title).to.equal('Google'); // Change 'Google' to the expected title of the page

        console.log('Title assertion passed!');
    } catch (error) {
        console.error('Title assertion failed:', error);
    } finally {
        await driver.quit();
    }
}

getTitleExample();
