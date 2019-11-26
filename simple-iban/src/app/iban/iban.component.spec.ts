import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbanComponent } from './iban.component';

describe('IbanComponent', () => {
  let component: IbanComponent;

  beforeEach(() => {
    component = new IbanComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('validate method' ,()=>{
    it('should return false', () => {
      expect(component.isValid(undefined)).toBe(false);
      expect(component.isValid(null)).toBe(false);
    });

    it('should return true when string length is 18', () => {
      expect(component.isValid('123456789012345678')).toBe(true);
    }); 
  })

  describe('check2Digit method', () => {
    it('should validate first 2 digit with NL', () => {
      let input = component.check2Digit('RN34RABO0145225224');
      expect(input).toBeFalsy();

      input = component.check2Digit('NL34RABO0145225224');
      expect(input).toBeTruthy();
  });
  })

  describe('checkBIC method', () => {
    it('should check if BIC is correct', () => {
      let input = component.checkBIC('NL34RABO0145225224');
      expect(input).toBeTruthy;
      input = component.checkBIC('NL34RABS0145225224');
      expect(input).toBeFalsy;
  });
})

  describe('rearrange method', () => {
    it('should rearrange 4 initial characters to the end of the string', () => {
      let input = component.rearange("NL34RABO0145225224");
      expect(input).toEqual("RABO0145225224NL34");
  });
  })

  describe('convert method', () => {
    it('should convert characters', () => {
      let input = component.convert("ABCD");
      expect(input).toEqual('10111213');
    });

    it('should convert first 4 characters', () => {
        let input = component.convert("RABO12345");
        expect(input).toEqual('2710112412345');
    });

    it('should convert first 2 of last 4 characters', () => {
        let input = component.convert("RABO0145225224NL34");
        expect(input).toEqual('271011240145225224232134');
    });
  })

  describe('compute method', () => {
    it('should return valid if reminder equal to 1 after modular 97', () => {
        let input = component.compute('98')
        expect(input).toEqual('Valid');
    });
    it('should return error if reminder not equal to 1', () => {
        let input = component.compute('271011240145225224232135')
        expect(input).toEqual('Error');
    });
});

});
