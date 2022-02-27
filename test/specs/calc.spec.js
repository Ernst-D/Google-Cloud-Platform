
import CalculatorPage from "../pages/calculator.page";
import SearchPage from "../pages/search.page";

describe('Search calc page',async()=>{
    it.skip('Search',async()=>{
        await browser.url('/');
        await SearchPage.searchBtn.click();
        await SearchPage.searchBtn.setValue('Google Cloud Pricing Calculator');
        await browser.keys('Enter');
        await SearchPage.cloudLink.waitForDisplayed();
        await SearchPage.cloudLink.click();
        
        

    });
});

describe('Test',async () => {
    it('click on something',async() => {
        await browser.url('https://cloud.google.com/products/calculator');
        await $('#cloud-site > devsite-iframe > iframe').waitForDisplayed();
        await browser.switchToFrame(await $('#cloud-site > devsite-iframe > iframe'));
        await browser.switchToFrame(await $('#myFrame'));
        await CalculatorPage.instancesInput.setValue(4);
        await CalculatorPage.opsysList.click();
        await $('#select_option_80').click();
        await CalculatorPage.mnClassList.click();
        await $('#select_option_93').click();
        await CalculatorPage.seriesList.click();
        await $('#select_option_218').waitForClickable();//WTF its working????
        await $('#select_option_218').click();
        await CalculatorPage.mtList.click();
        await $('#select_option_421').waitForClickable()
        await $('#select_option_421').click();
        await CalculatorPage.bootDiskList.click();
        await $('#select_option_228').waitForClickable()
        await $('#select_option_228').click();
        await CalculatorPage.bootSizeInput.setValue(375);
        await CalculatorPage.addGpuBtn.click();
        await CalculatorPage.gpuTypeList.waitForClickable();
        await CalculatorPage.gpuTypeList.click();
        await $('#select_option_461').waitForClickable()
        await $('#select_option_461').click();
        await CalculatorPage.numGpuList.click();
        await $('#select_option_465').waitForClickable();
        await $('#select_option_465').click();
        await CalculatorPage.numSsdList.click();
        await $('#select_option_442').waitForClickable();
        await $('#select_option_442').click();
        await CalculatorPage.dataLocList.click();
        await $('#select_option_239').waitForClickable();
        await $('#select_option_239').click();
        await CalculatorPage.commList.click();
        await $('#select_option_116').waitForClickable();
        await $('#select_option_116').click();
        await CalculatorPage.addBtn.click();
        await CalculatorPage.estimateEmailBtn.waitForDisplayed();
        await CalculatorPage.estimateEmailBtn.click();
        // await CalculatorPage.emailInput.waitForDisplayed();




        await browser.pause(10000)
       
       
        
        // await browser.newWindow('http://google.com')
        
        // await browser.switchWindow('https://cloud.google.com/products/calculator');
        

    });
});