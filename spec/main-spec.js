const main = require('../main/main');

describe('main()', function() {

    it('user input is the same as system input',function () {
        let sysInput = '1234';
        let userInput = '1234';
        let expected = '4A0B';
        expect(main(sysInput,userInput)).toBe(expected);
    });
    it('user input have same eles with system but different position',function () {
        let sysInput = '1234';
        let userInput = '4321';
        let expected = '0A4B';
        expect(main(sysInput,userInput)).toBe(expected);
    });
    it('user input have same eles with system but different position',function () {
        let sysInput = '1234';
        let userInput = '1643';
        let expected = '1A2B';
        expect(main(sysInput,userInput)).toBe(expected);
    });
    it('user input have same eles with system but different position',function () {
        let sysInput = '1234';
        let userInput = '3947';
        let expected = '0A2B';
        expect(main(sysInput,userInput)).toBe(expected);
    });
});