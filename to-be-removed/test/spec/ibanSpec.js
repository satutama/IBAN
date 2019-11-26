describe("IBAN Validation", function () {
    const ibanLength = 18;

    describe("Button submit", function () {
        let mockDomObject = {};
        beforeEach(function () {
            spyOn(document, 'querySelector');
            document.querySelector.and.returnValue(mockDomObject);
        })
        it('should give failed result when button is clicked with empty string', () => {
            let input = submit();
            expect(mockDomObject.innerHTML).toEqual('Wrong IBAN number');
        });

        it('should give succeed result when button is clicked with correct string', () => {
            let input = submit('NL34RABO0145225224');
            expect(mockDomObject.innerHTML).toEqual('Correct IBAN number');
        });
    })


    it('should throw error if iban length is not right', () => {
        let input = validate("NL34RABO0145225224ds");
        expect(input).toEqual('not valid');
    });
    it('should validate correct iban length ', () => {
        let input = validate("NL34RABO0145225224");
        expect(input).toBeTruthy();
    });

    it('should validate first 2 digit with NL', () => {
        let input = check2Digit('RN34RABO0145225224');
        expect(input).toBeFalsy();

        input = check2Digit('NL34RABO0145225224');
        expect(input).toBeTruthy();
    });

    it('should check if BIC is correct', () => {
        let input = checkBIC('NL34RABO0145225224');
        expect(input).toBeTruthy;
        input = checkBIC('NL34RABS0145225224');
        expect(input).toBeFalsy;
    });

    it('should throw error if length is under 18 character', () => {
        let input = validate();
        expect(input).toEqual("not valid");
    });

    it('should rearrange 4 initial characters to the end of the string', () => {
        let input = rearange("NL34RABO0145225224");
        expect(input).toEqual("RABO0145225224NL34");
    });

    describe('should convert to integer', () => {
        it('should convert characters', () => {
            let input = convert("ABCD");
            expect(input).toEqual('10111213');
        });
        it('should convert first 4 characters', () => {
            let input = convert("RABO12345");
            expect(input).toEqual('2710112412345');
        });
        it('should convert first 2 of last 4 characters', () => {
            let input = convert("RABO0145225224NL34");
            expect(input).toEqual('271011240145225224232134');
        });
    });

    describe('Calculation', () => {
        it('should return valid if reminder equal to 1 after modular 97', () => {
            let input = compute('98')
            expect(input).toEqual('Valid');
        });
        it('should return error if reminder not equal to 1', () => {
            let input = compute('271011240145225224232135')
            expect(input).toEqual('Error');
        });
    });
});