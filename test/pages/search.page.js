import Page from "./page";

class SearchPage extends Page {
  

    get searchBtn(){
        return $('[class="devsite-search-field devsite-search-query"]');
    }

    // get searchInput(){
    //     return $('[class="devsite-popout"]');
    // }

    // async waitForPageLoad(){
    //     return await this.searchInput.waitForDisplayed();
    // }
    // get searchList(){
    //    browser.waitUntil(async() => {
    //                 return await $('//*[@id="___gcse_0"]/div/div/div/div[5]').isDisplayed(); 
    //               });
           
    // }

    get cloudLink(){
        
        return $('//*[@id="___gcse_0"]/div/div/div/div[5]/div[2]/div/div/div[1]/div[1]/div[1]/div[1]/div/a');
    }
   
    open(){
        super.open('https://cloud.google.com/');
    }
    
}

export default new SearchPage();