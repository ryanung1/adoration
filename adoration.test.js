const each = require('jest-each').default;

const {showHowMuchILoveYou} = require('./adoration')

describe("showHowMuchILoveYou", () => {

    it("Exists", () => {
        expect(showHowMuchILoveYou).toBeDefined();
    })

    it("Is a function", () => {
        expect(showHowMuchILoveYou instanceof Function).toEqual(true);
    })

    each([["I love you thiiiiis much!", 5], 
            ["I love you thiiis much!", 3]
            ]).test("Returns %s when passd %s ", (expected, amount) => {
                expect(showHowMuchILoveYou(amount)).toBe(expected);
            })

    it("Throws an error when passed a string", () => {
        expect(() => {
            showHowMuchILoveYou("with all my heart")
        }).toThrow(new Error("I'm really sorry: you're just not my type."));
    })
})