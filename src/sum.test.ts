import { sum }  from './example';
import { testNames } from "./global";
import {getTestFileName} from "./getTestFileName";

console.log("TESTNAME", getTestFileName(expect.getState().testPath));

describe("testing sum", () => {

    describe("middle", () => {

        test('adds 1 + 1 to equal 2', async () => {

            console.log("TESTNAME", getTestFileName(expect.getState().testPath));

            expect(sum(1, 1)).toBe(2);
        });
    })

})