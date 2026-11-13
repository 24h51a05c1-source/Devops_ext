const { Builder, By, until } = require('selenium-webdriver');

async function test() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('file:///C:/Users/nared/OneDrive/Desktop/Devops_ext/comp8/index.html');
        
        await driver.findElement(By.id('a')).sendKeys('10');
        await driver.findElement(By.id('b')).sendKeys('20');
        await driver.findElement(By.id('add')).click();

        let result = await driver.wait(until.elementLocated(By.id('result')), 5000).getText();
        
        console.log('Result:', result);
        console.log(result === '30' ? 'Test Passed' : 'Test Failed');
    } finally {
        await driver.quit();
    }
}
test().catch(console.error);