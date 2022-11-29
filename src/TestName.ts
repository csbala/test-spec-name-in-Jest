import { sum }  from './example';

describe("testing sum", () => {

    describe("middle", () => {

        test('adds 1 + 1 to equal 2', async () => {

            console.log("TESTNAME", expect.getState().currentTestName)

            expect(sum(1, 1)).toBe(2);
        });
    })

})