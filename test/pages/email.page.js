
import Page from "./page";

class EmailPage extends Page {
    get emailInput(){
        return $("//input[@type='email']");
    }

    get tempEmailName(){
        return $('#eposta_adres');
    }

    get sendEmailBtn(){
        return $("//*[text()[contains(.,'Send Email')]]");
    }

//     async tempEmail(){
//     await browser.url('https://tempail.com/');
//     const inputUser = await this.tempEmailName;
//     ;
// }
};

    
export default new EmailPage('/resultBlock');