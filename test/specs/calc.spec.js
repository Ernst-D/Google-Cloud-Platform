
import CalculatorPage from "../pages/calculator.page";
import SearchPage from "../pages/search.page";

describe('Search calc page',async()=>{
    it('Search',async()=>{
        await browser.url('/');
        await SearchPage.searchBtn.click();
        await SearchPage.searchBtn.setValue('Google Cloud Pricing Calculator');
        await browser.keys('Enter');
        await SearchPage.cloudLink.click();
        

    });
});

describe('Test',async () => {
    it.skip('click on something',async() => {
        // await browser.url('https://cloud.google.com/products/calculator');
        await browser.switchToFrame(await $('#cloud-site > devsite-iframe > iframe'));
        await browser.switchToFrame(await $('#myFrame'));
        await CalculatorPage.instancesInput.setValue(4);
        await CalculatorPage.opsysList.click();
        await $('#select_option_80').click();
        
        // await browser.newWindow('http://google.com')
        // await browser.pause(10000);
        // await browser.switchWindow('https://cloud.google.com/products/calculator');
        // await browser.pause(10000);

    });
});