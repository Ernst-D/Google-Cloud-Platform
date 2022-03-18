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
        return $$('[data-ctorig="https://cloud.google.com/products/calculator"]')[0]; //mybe use something like //a[contains(@href,'/products/calculator')]",//a[contains(@href,'/products/calculator')]/b[1]
    }
   
    open(){
        super.open('https://cloud.google.com/');
    }
    
}

export default new SearchPage('/');