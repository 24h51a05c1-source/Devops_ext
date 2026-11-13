
const { Builder, Browser } = require("selenium-webdriver");

async function testWebsite() {
    const driver = await new Builder()
        .forBrowser(Browser.CHROME)
        .build();

    try {
        await driver.get("https://www.youtube.com");

        const title = await driver.getTitle();
        console.log("Page title:", title);
    } finally {
        await driver.quit();
    }
}

testWebsite();