let homepage = function()
{
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.getBrowser = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNumber.sendKeys(firstNo)
    };

    this.enterSecondNumber = function(secondNo){
        secondNumber.sendKeys(secondNo)
    };

    this.clickGo = function(){
        goButton.click();

    };
this.verifyResults = function(result)
{
let output = element(by.cssContainingText('.ng-binding', '5'));
expect(output.getText()).toEqual('5');

};

};

module.exports = new homepage();