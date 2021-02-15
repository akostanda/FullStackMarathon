describe("checkBrackets", function () {
    it("Null string", function() {
        assert.equal(checkBrackets(""),2);
    });
    it("1)()(())2(()", function() {
        assert.equal(checkBrackets("1)()(())2(()"),5);
    });
    it(")))))(((((", function() {
        assert.equal(checkBrackets(")))))((((("),2);
    });
    it("123", function() {
        assert.equal(checkBrackets(123),2);
    });
    it("()()()()()()()()", function() {
        assert.equal(checkBrackets("()()()()()()()()"),2);
    });

    it("Null string", function() {
        assert.equal(checkBrackets(""),-1);
    });
    it("1)()(())2(()", function() {
        assert.equal(checkBrackets("1)()(())2(()"),2);
    });
    it(")))))(((((", function() {
        assert.equal(checkBrackets(")))))((((("),10);
    });
    it("123", function() {
        assert.equal(checkBrackets(123),-1);
    });
    it("()()()()()()()()", function() {
        assert.equal(checkBrackets("()()()()()()()()"),0);
    });

    it("NaN", function() {
        assert.equal(checkBrackets(NaN),-1);
    });
    it("Hello world", function() {
        assert.equal(checkBrackets("Hello world"),-1);
    });
    it("(Hello) (world)", function() {
        assert.equal(checkBrackets("(Hello) (world)"),0);
    });
    it("46236wfgwgef2347293492)", function() {
        assert.equal(checkBrackets("46236wfgwgef2347293492)"),1);
    });
    it(")()()()()()()(", function() {
        assert.equal(checkBrackets(")()()()()()()("),2);
    });
});

