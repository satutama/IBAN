import { Component, OnInit } from '@angular/core';
const conversion = {
  'A': '10',
  'B': '11',
  'C': '12',
  'D': '13',
  'E': '14',
  'F': '15',
  'G': '16',
  'H': '17',
  'I': '18',
  'J': '19',
  'K': '20',
  'L': '21',
  'M': '22',
  'N': '23',
  'O': '24',
  'P': '25',
  'Q': '26',
  'R': '27',
  'S': '28',
  'T': '29',
  'U': '30',
  'V': '31',
  'W': '32',
  'X': '33',
  'Y': '34',
  'Z': '35'
};

const swift = ['ABNA', 'INGB', 'RABO'];
@Component({
  selector: 'app-iban',
  templateUrl: './iban.component.html',
  styleUrls: ['./iban.component.scss']
})
export class IbanComponent implements OnInit {
  ibanNumber;
  constructor() { }

  ngOnInit() {
  }
  
  somethingChanged(event){
    this.ibanNumber = event.target.value  
  }

  submit() {    
    let accountNumber = !!this.ibanNumber ?  this.ibanNumber.replace(/ /g, '') : this.ibanNumber;

    if (this.isValid(accountNumber) && this.check2Digit(accountNumber) && this.checkBIC(accountNumber) === true) {
      const rearangeNumber = this.rearange(accountNumber);
      const convertNumber = this.convert(rearangeNumber);
      document.querySelector('#result').innerHTML = 'Correct IBAN number';
    } else {
      document.querySelector('#result').innerHTML = 'Wrong IBAN number';
    }
  }

  isValid(stringLength) {
    return !!stringLength && stringLength.length === 18 ? true : false
  }

  check2Digit(account?: string) {
    const digits = account.slice(0, 2);

    if (digits[0].match(/N/i) && digits[1].match(/L/i)) {
      return true;
    }
    return false;
  }

  checkBIC(account?: string) {
    const bic = account.slice(4, 8);
    for (let index = 0; index < swift.length; index++) {
      if (bic === swift[index]) {
        return true;
      }
    }

    return false;
  }

  rearange(account?: string) {
    const ibanValue = account.slice(4) + account.slice(0, 4);
    return ibanValue;
  }

  convert(character?: string) {

    const convert = character.split('');
    let firstFour = '';
    const last2 = character.slice(14, 16).split('');
    let lastFour = '';
    for (let index = 0; index < 4; index++) {
      firstFour += conversion[convert[index]];
    }

    for (let index = 0; index < last2.length; index++) {
      lastFour += conversion[last2[index]];
    }

    lastFour += character.slice(16);

    return firstFour + character.slice(4, 14) + lastFour;

  }

  compute(converted: string) {
    const result = Number(converted);
    const success = 'Valid';
    const failed = 'Error';
    if (result % 97 === 1) {
      return success;
    } else {
      return failed;
    }
  }

}
