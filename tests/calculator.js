var homepage = require('../pages/homepage');

describe('demo calculator tests', function(){

    it('addition test', function() {

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.goToURL('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('2');

        //element(by.model('second')).sendKeys('2');
        homepage.enterSecondNumber('2');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        // var result = element(by.cssContainingText('.ng-binding', '4'))
        // expect(result.getText()).toEqual('4');
        homepage.verifyResult('4');

        browser.sleep(4000)
    });

})