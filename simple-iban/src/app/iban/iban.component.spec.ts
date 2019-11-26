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

  it('should validate', () => {
    expect(component.validate()).toThrowError();
  });

});
