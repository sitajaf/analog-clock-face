var Builder = require('../src/ClockBuilder.js');

describe("ClockBuilder", function () {
    var builder = new Builder();

    it("should ensure proper time format ", function () {
        expect(function () {
            builder.get("21.34");
        }).toThrowError("Invalid time!");
    });

    it("should ensure proper time length", function () {
        expect(function () {
            builder.get("21:3");
        }).toThrowError("Invalid time!");
    });
    

    it("should not allow hours less than 00 ", function () {
        expect(function () {
            builder.get("-21:34");
        }).toThrowError("Invalid time!");
    });

    it("should not allow hours greater than 23", function () {
        expect(function () {
            builder.get("25:56");
        }).toThrowError("Invalid hour!");
    });

    it("should not allow minutes less than 0", function () {
        expect(function () {
            builder.get("09:-12");
        }).toThrowError("Invalid time!");
    });

    it("should not allow minutes greater than 59", function () {
        expect(function () {
            builder.get("07:60");
        }).toThrowError("Invalid minutes!");
    });

    it("should not allow hours with single digit", function () {
        expect(function () {
            builder.get("1:30");
        }).toThrowError("Invalid time!");
    });

    it("should return representation of 22:30", function () {
        var expectValue = ["o", "o", "o", "o", "o", "o", "m", "o", "o", "o", "h", "o"];

        expect(builder.get("22:30")).toEqual(expectValue);
    });

    it("should return representation of 04:59", function () {
        var expectValue = ["o", "o", "o", "o", "h", "o", "o", "o", "o", "o", "o", "m"];

        expect(builder.get("04:59")).toEqual(expectValue);
    });

    it("should return representation of 00:30", function () {
        var expectValue = ["h", "o", "o", "o", "o", "o", "m", "o", "o", "o", "o", "o"];

        expect(builder.get("00:30")).toEqual(expectValue);
    });

    it("should return representation of 12:46", function () {
        var expectValue = ["h", "o", "o", "o", "o", "o", "o", "o", "o", "m", "o", "o"];

        expect(builder.get("12:46")).toEqual(expectValue);
    });

    it("should return representation of 00:00", function () {
        var expectValue = ["x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o"];

        expect(builder.get("00:00")).toEqual(expectValue);
    });

    it("should return representation of 19:37", function () {
        var expectValue = ["o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o"];

        expect(builder.get("19:37")).toEqual(expectValue);
    });

});