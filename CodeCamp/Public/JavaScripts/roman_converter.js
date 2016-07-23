function convert(num) {
  var numString = num.toString().split('');
  var onesDigit = "";
  var tensDigit = "";
  var hundredsDigit = "";
  var thousandsDigit = "";
  var thousands = numString[numString.length - 4];
  var hundreds = numString[numString.length - 3];
  var tens = numString[numString.length - 2];
  var ones = numString[numString.length - 1];
  
  
  switch(ones) {
    case "0":
      onesDigit = "";
      break;
    case "1":
      onesDigit = "I";
      break;
    case "2":
      onesDigit = "II";
      break;
    case "3":
      onesDigit = "III";
      break;
    case "4":
      onesDigit = "IV";
      break;
    case "5":
      onesDigit = "V";
      break;
    case "6":
      onesDigit = "VI";
      break;
    case "7":
      onesDigit = "VII";
      break;
    case "8":
      onesDigit = "VIII";
      break;
    case "9":
      onesDigit = "IX";
      break;
  }

 switch(tens) {
    case "0":
      tensDigit = "";
      break;
    case "1":
      tensDigit = "X";
      break;
    case "2":
      tensDigit = "XX";
      break;
    case "3":
      tensDigit = "XXX";
      break;
    case "4":
      tensDigit = "XL";
      break;
    case "5":
      tensDigit = "L";
      break;
    case "6":
      tensDigit = "LX";
      break;
    case "7":
      tensDigit = "LXX";
      break;
    case "8":
      tensDigit = "LXXX";
      break;
    case "9":
      tensDigit = "XC";
      break;
  }

switch(hundreds) {
    case "0":
      hundredsDigit = "";
      break;
    case "1":
      hundredsDigit = "C";
      break;
    case "2":
      hundredsDigit = "CC";
      break;
    case "3":
      hundredsDigit = "CCC";
      break;
    case "4":
      hundredsDigit = "CD";
      break;
    case "5":
      hundredsDigit = "D";
      break;
    case "6":
      hundredsDigit = "DC";
      break;
    case "7":
      hundredsDigit = "DCC";
      break;
    case "8":
      hundredsDigit = "DCCC";
      break;
    case "9":
      hundredsDigit = "CM";
      break;
  }

  switch(thousands) {
    case "0":
      thousandsDigit = "";
      break;
    case "1":
      thousandsDigit = "M";
      break;
    case "2":
      thousandsDigit = "MM";
      break;
    case "3":
      thousandsDigit = "MMM";
      break;
    case "4":
      thousandsDigit = "MMMM";
      break;
    case "5":
      thousandsDigit = "MMMMM";
      break;
    case "6":
      thousandsDigit = "MMMMMM";
      break;
    case "7":
      thousandsDigit = "MMMMMMM";
      break;
    case "8":
      thousandsDigit = "MMMMMMMM";
      break;
    case "9":
      thousandsDigit = "MMMMMMMMM";
      break;
  }  
  var done = thousandsDigit + hundredsDigit + tensDigit + onesDigit;
  return done;
}

