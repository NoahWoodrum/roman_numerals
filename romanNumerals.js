function handleOnes(number) {
  if (number === 1) {
    return "I"
  } else if (number === 2) {
    return "II"
  } else if (number === 3) {
    return "III"
  } else if (number === 4) {
    return "IV"
  } else if (number === 5) {
    return "V"
  } else if (number === 6) {
    return "VI"
  } else if (number === 7) {
    return "VII"
  } else if (number === 8) {
    return "VIII"
  } else if (number === 9) {
    return "IX"
  }
}

function handleTens(number) {
  if (number === 1) {
    return "X"
  } else if (number === 2) {
    return "XX"
  } else if (number === 3) {
    return "XXX"
  } else if (number === 4) {
    return "XL"
  } else if (number === 5) {
    return "L"
  } else if (number === 6) {
    return "LX"
  } else if (number === 7) {
    return "LXX"
  } else if (number === 8) {
    return "LXXX"
  } else if (number === 9) {
    return "XC"
  }
}

function handleHundreds(number) {
  if (number === 1) {
    return "C"
  } else if (number === 2) {
    return "CC"
  } else if (number === 3) {
    return "CCC"
  } else if (number === 4) {
    return "CD"
  } else if (number === 5) {
    return "D"
  } else if (number === 6) {
    return "DC"
  } else if (number === 7) {
    return "DCC"
  } else if (number === 8) {
    return "DCCC"
  } else if (number === 9) {
    return "CM"
  }
}

function handleThousands(number) {
  if (number === 1) {
    return "M"
  } else if (number === 2) {
    return "MM"
  } else if (number === 3) {
    return "MMM"
  } else if (number === 4) {
    return "M𐆗"
  } else if (number === 5) {
    return "𐆗"
  } else if (number === 6) {
    return "𐆗M"
  } else if (number === 7) {
    return "𐆗MM"
  } else if (number === 8) {
    return "𐆗MMM"
  } else if (number === 9) {
    return "M𐆖"
  }
}

function romanNumerals(number) {
  const thousands = Math.floor(number / 1000 % 100);
  const hundreds = Math.floor(number / 100 % 10);
  const tens = Math.floor(number / 10 % 10);
  
  const stringNumber = "" + number;
  const ones = Number(stringNumber.slice(-1));
  
  // console.log("thousands: ", thousands)
  // console.log("hundreds: ", hundreds)
  // console.log("tens: ", tens)
  // console.log("ones: ", ones)
  
  let thousandsInRoman = "";
  if (thousands > 0) {
    thousandsInRoman = handleThousands(thousands)
  }

  let hundredsInRoman = "";
  if (number >= 100 && (Math.floor(number / 100) % 10) !== 0) {
    hundredsInRoman = handleHundreds(hundreds)
  }

  let tensInRoman = "";
  if (number >= 10 && (Math.floor(number / 10) % 10) !== 0) {
    tensInRoman = handleTens(tens);
  }


  let onesInRoman = "";
  if ((number % 10) !== 0) {
    onesInRoman = handleOnes(ones);
  }

  return thousandsInRoman + hundredsInRoman + tensInRoman + onesInRoman;
}
