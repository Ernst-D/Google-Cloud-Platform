import Page from "./page";

class CalculatorPage extends Page {
       
    
    get instancesInput(){
        return $('#input_78'); //setValue (4)
    }
    
   
    get opsysList(){
        return $('#select_value_label_70'); 
    }

    get mnClassList(){
        return $('#select_value_label_71'); 
    }

    get seriesList(){
        return $('#select_value_label_73'); 
    }

    get mtList(){
        return $('#select_value_label_74'); 
    }

    get bootDiskList(){
        return $('#select_value_label_75');
    }

    get bootSizeInput(){
        return $('#input_109'); //setValue(375)
    }

    get addGpuBtn(){
        return $('#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div:nth-child(13) > div.layout-column.flex-gt-sm-90.flex-80 > md-input-container > md-checkbox'); //click()"
    }

    get gpuTypeList(){
        return $('#select_454'); 
    }
    
    get numGpuList(){
        return $('#select_value_label_453'); 
    }

    get numSsdList(){
        return $('#select_value_label_415'); //id="select_option_442"
    }
    
    get dataLocList(){
        return $('#select_value_label_76'); //id="select_option_239"
    }

    get commList(){
        return $('#select_value_label_77'); //id="select_option_116"
    }

    get addBtn(){
        return $('#mainForm > div:nth-child(3) > div > md-card > md-card-content > div > div:nth-child(1) > form > div.layout-align-end-start.layout-row > button'); //click
    }

    get estimateEmailBtn(){
        return $('#email_quote');//click
    }
    
   
 }
 export default new CalculatorPage('/products/calculator/');