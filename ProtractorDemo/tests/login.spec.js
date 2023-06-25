describe('Login Page', function() {
    beforeEach(function() {
      browser.get('https://sakshingp.github.io/assignment/login.html');
    });
  
    it('should log in with valid credentials', function() {
      element(by.id('username')).sendKeys('Aritra1234');
      element(by.id('password')).sendKeys('Aritra200@');
      element(by.id('login-button')).click();
      expect(browser.getCurrentUrl()).toEqual('https://sakshingp.github.io/assignment/home.html');
    });
  
    // Add more test cases for different scenarios
  
  });