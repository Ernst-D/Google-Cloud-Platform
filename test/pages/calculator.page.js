import Page from "./page";

class CalculatorPage extends Page {
       
    
    get instancesInput(){
        return $('[ng-model="listingCtrl.computeServer.quantity"]'); //setValue (4)
    }
    
   
    get opsysList(){
        return $('[ng-model="listingCtrl.computeServer.os"]'); 
    }

    get mnClassList(){
        return $('[ng-model="listingCtrl.computeServer.class"]'); 
    }

    get seriesList(){
        return $('[ng-model="listingCtrl.computeServer.series"]'); 
    }

    get mtList(){
        return $('[ng-model="listingCtrl.computeServer.instance"]'); 
    }

    get bootDiskList(){
        return $('[ng-model="listingCtrl.computeServer.bootDiskType"]');
    }

    get bootSizeInput(){
        return $('[ng-model="listingCtrl.computeServer.bootDiskSize"]'); //setValue(375)
    }

    get addGpuBtn(){
        return $('[ng-model="listingCtrl.computeServer.addGPUs"]'); //click()"
    }

    get gpuTypeList(){
        return $('[ng-model="listingCtrl.computeServer.gpuType"]'); 
    }
    
    get numGpuList(){
        return $('[ng-model="listingCtrl.computeServer.gpuCount"]'); 
    }

    get numSsdList(){
        return $('[ng-model="listingCtrl.computeServer.ssd"]'); //id="select_option_442"
    }
    
    get dataLocList(){
        return $('[ng-model="listingCtrl.computeServer.location"]'); //id="select_option_239"
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