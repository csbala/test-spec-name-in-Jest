"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_1 = require("./example");
const getTestFileName = require("./getTestFileName");

console.log("TEST file", getTestFileName(expect.getState().testPath));

describe("testing sum", () => {

    console.log("TEST file", getTestFileName(expect.getState().testPath));

    describe("middle", () => {

        beforeEach(() => {
            console.log("TEST file in beforeEach hook:", getTestFileName(expect.getState().testPath));
        });

        afterEach(() => {
            console.log("TEST file in afterEach hook:", getTestFileName(expect.getState().testPath));
        });

        test('adds 1 + 1 to equal 2', async () => {
            expect((0, example_1.sum)(1, 1)).toBe(2);
        });

        test('adds 1 + 2 to equal 3', async () => {
            expect((0, example_1.sum)(1, 2)).toBe(3);
        });
    });
});
