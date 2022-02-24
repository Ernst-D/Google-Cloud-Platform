import Page from "./page";

class CalculatorPage extends Page {
    constructor(pageUrl){
        super();
        this.url = pageUrl;
    }
    
    get searchProductInput(){
        return $('#input-0');
    }
    
    get instancesInput(){
        return $('//*[@id="input_78"]'); //setValue (4)
    }
    
    // clickOn(){
    //     if(this.instancesInput.isExisting() === true){
    //         this.instancesInput.click();
    //     }
    // }
    
    get opsysList(){
        return $('#input_78'); //id="select_option_80"
    }

    get mnsList(){
        return $('[id="select_value_label_71"]'); //id="select_option_93"
    }

    get seriesList(){
        return $('[id="select_103"]'); //id="select_option_218"
    }

    get mtList(){
        return $('[id="select_105"]'); //id="select_option_458"
    }

    get bootList(){
        return $('[id="select_107"]'); //id="select_option_228"
    }

    get bootSizeInput(){
        return $('[id="input_109"]'); //setValue(375)
    }

    get addGpuBtn(){
        return $('[//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[11]/div[1]/md-input-container/md-checkbox]'); //click()"
    }

    get gpuTypeList(){
        return $('[id="select_489"]'); //id="select_option_496"
    }
    
    get numGpuList(){
        return $('[id="select_491"]'); //id="select_option_500"
    }

    get numSsdList(){
        return $('[id="select_414"]'); //id="select_option_478"
    }
    
    get dataLocList(){
        return $('[id="select_111"]'); //id="select_option_239"
    }

    get commList(){
        return $('[id="select_118"]'); //id="select_option_116"
    }

    get addBtn(){
        return $('//*[@id="mainForm"]/div[2]/div/md-card/md-card-content/div/div[1]/form/div[19]/button'); //click
    }

    get estimateEmailBtn(){
        return $('[id="email_quote"]');//click
    }
 }
 export default new CalculatorPage('/products/calculator/');