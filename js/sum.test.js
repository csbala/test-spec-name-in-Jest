"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = require("./example");

describe("testing sum", () => {
    describe("middle", () => {
        test('adds 1 + 1 to equal 2', async () => {
            console.log("TESTNAME", testNames);
            expect((0, example_1.sum)(1, 1)).toBe(2);
        });
    });
});
