var homepage = function() {
    var firstNumberInput = element(by.model('first'));
    var secondNumberInput = element(by.model('second'));
    var goButton = element(by.css('[ng-click="doAddition()"]'));

    this.goToURL = function(url) {
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNum) {
        firstNumberInput.sendKeys(firstNum);
    };

    this.enterSecondNumber = function(secondNum) {
        secondNumberInput.sendKeys(secondNum);
    };

    this.clickGo = function() {
        goButton.click();
    };

    this.verifyResult = function(result) {
        var output = element(by.cssContainingText('.ng-binding', result))
        expect(output.getText()).toEqual(result);
    };


};

module.exports = new homepage();