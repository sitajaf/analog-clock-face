var Builder = require('../src/Builder.js');

describe("Builder", function(){
   it("dummy test", function(){
      var num = new Builder().get();

      expect(num).toEqual(3);
   });
});