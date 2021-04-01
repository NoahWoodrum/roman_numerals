// in this function, we only handle the 1s digits
// so the values of number are between 0-9
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
  // ...
}

function handleThousands(number) {
  // ...
}

function romanNumerals(number) {
  // number we need to know how many digits
  // 653
  // hundreds = 6
  // tens = 5
  // ones = 3
  // 653 / 100 = 6.53
  // Math.floor(6.53) = 6

  // 653 / 1000 = Math.floor(<0) = 0, how many thousands
  // 653 / 100 = 6.53, Math.floor(6.53) = 6, how many hundreds
  // 653 % 100 = 53 = how many tens, we want to round down to just 50
  // 653 % 10 = 3 = how many ones

  // 25, >9, 20 + 5
  // 25/10 = 2.5
  // Math.floor(2.5) = 2 => tens value
  // 25 % 10 = 5 => ones value

  let tens;
  let ones;

  let tensInRoman;
  let onesInRoman;

  const decimalTens = number / 10;
  tens = Math.floor(decimalTens);
  // now handle the tens
  tensInRoman = handleTens(tens);

  ones = number % 10;
  // now handle the ones
  onesInRoman = handleOnes(ones);

  console.log("ehhh")

  return "I"
}

// 10  = X
// 20  = XX
// 30  = XXX
// 40  = XL
// 50  = L
// 60  = LX
// 70  = LXX
// 80  = LXXX
// 90  = XC
// 100 = C

