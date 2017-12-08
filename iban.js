var conversion = {
    'A': "10",
    'B': "11",
    'C': "12",
    'D': "13",
    'E': "14",
    'F': "15",
    'G': "16",
    'H': "17",
    'I': "18",
    'J': "19",
    'K': "20",
    'L': "21",
    'M': "22",
    'N': "23",
    'O': "24",
    'P': "25",
    'Q': "26",
    'R': "27",
    'S': "28",
    'T': "29",
    'U': "30",
    'V': "31",
    'W': "32",
    'X': "33",
    'Y': "34",
    'Z': "35"
};
var swift = ['ABNA', 'INGB', 'RABO'];
function submit(account) {
    var accountNumber;
    if (document.getElementById('submit') === undefined || document.getElementById('submit') === null) {
        accountNumber = account;
    }
    else {
        accountNumber = document.getElementById('submit').value;
    }
    if (validate(accountNumber) === true && check2Digit(accountNumber) === true && checkBIC(accountNumber) === true) {
        var rearangeNumber = rearange(accountNumber);
        var convertNumber = convert(rearangeNumber);
        document.querySelector('#result').innerHTML = "succeed";
    }
    else {
        document.querySelector('#result').innerHTML = "failed";
    }
}
function validate(account) {
    var error = "not valid";
    if (account === undefined) {
        return error;
    }
    if (account.length === 18) {
        return true;
    }
    else {
        return error;
    }
}
;
function check2Digit(account) {
    var digits = account.slice(0, 2);
    if (digits[0].match(/N/i) && digits[1].match(/L/i)) {
        return true;
    }
    return false;
}
function checkBIC(account) {
    var bic = account.slice(4, 8);
    for (var index = 0; index < swift.length; index++) {
        if (bic === swift[index]) {
            return true;
        }
    }
    return false;
}
;
function rearange(account) {
    var ibanValue = account.slice(4) + account.slice(0, 4);
    return ibanValue;
}
;
function convert(character) {
    var convert = character.split("");
    var firstFour = "";
    var last2 = character.slice(14, 16).split("");
    var lastFour = "";
    for (var index = 0; index < 4; index++) {
        firstFour += conversion[convert[index]];
    }
    for (var index = 0; index < last2.length; index++) {
        lastFour += conversion[last2[index]];
    }
    lastFour += character.slice(16);
    return firstFour + character.slice(4, 14) + lastFour;
}
function compute(converted) {
    var result = parseInt(converted);
    var success = "Valid";
    var failed = "Error";
    if (result % 97 === 1) {
        return success;
    }
    else {
        return failed;
    }
}
