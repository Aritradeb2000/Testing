describe('Home Page', function() {
    beforeEach(function() {
      browser.get('https://sakshingp.github.io/assignment/home.html');
    });
  
    it('should sort the transaction table by amount', function() {
      element(by.css('.table-header .amount-header')).click();
      // Add assertions to check if the table values are sorted correctly
    });
  
    // Add more test cases for different scenarios
  
  });