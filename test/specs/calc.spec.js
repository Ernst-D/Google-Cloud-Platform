
import CalculatorPage from "../pages/calculator.page";
import SearchPage from "../pages/search.page";
import EmailPage from "../pages/email.page";


describe('Search calc page',async()=>{
    it('Search',async()=>{
        await browser.url('/');
        await SearchPage.searchBtn.click();
        await SearchPage.searchBtn.setValue('Google Cloud Pricing Calculator');
        await browser.keys('Enter');
        await SearchPage.cloudLink.waitForDisplayed();
        await SearchPage.cloudLink.click();
    });
});

describe('Test',async () => {
    it('filling the form',async() => {       
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
    });

    it('email input and temp email',async()=>{
        await browser.newWindow('https://tempail.com/');
        await browser.setTimeout({ 'pageLoad': 15000 });
        await EmailPage.tempEmailName.waitForDisplayed();
        const inputUser = await EmailPage.tempEmailName;
        const value = await inputUser.getValue();
        await browser.switchWindow('/');
        await browser.switchToFrame(await $('#cloud-site > devsite-iframe > iframe'));
        await browser.switchToFrame(await $('#myFrame'));
        await EmailPage.emailInput.setValue(value);
        await EmailPage.sendEmailBtn.click();
        // await browser.pause(5000);
        await browser.switchWindow('Temp Mail - Temporary Email');
        await browser.pause(10000);
        await $("//a[contains(@href,'/mail')]").click();
        await browser.pause(30000);
    });
});