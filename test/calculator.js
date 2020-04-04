let homepage = require('../pages/homepage');
describe('Demo calculator test', function(){
it('Addtion Test', function(){

//browser.get('https://juliemr.github.io/protractor-demo/')
homepage.getBrowser('https://juliemr.github.io/protractor-demo/');

//element(by.model('first')).sendKeys('2');
homepage.enterFirstNumber('2');

//element(by.model('second')).sendKeys('3');
homepage.enterSecondNumber('3');

//element(by.css('[ng-click="doAddition()"]')).click();
homepage.clickGo();

//let result =element(by.cssContainingText('.ng-binding', '5'));
//expect(result.getText()).toEqual('5');
homepage.verifyResults('5');

browser.sleep(2000);

});


});

