document.getElementById('convert-btn').addEventListener('click', function() {
  const number = parseInt(document.getElementById('number').value);
  const outputElement = document.getElementById('output');

  if (isNaN(number)) {
      outputElement.textContent = "Please enter a valid number";
  } else if (number < 1) {
      outputElement.textContent = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
      outputElement.textContent = "Please enter a number less than or equal to 3999";
  } else {
      outputElement.textContent = convertToRoman(number);
  }
});

function convertToRoman(number) {
  const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
  ];

  let roman = '';

  for (let i = 0; i < romanNumerals.length; i++) {
      while (number >= romanNumerals[i].value) {
          roman += romanNumerals[i].numeral;
          number -= romanNumerals[i].value;
      }
  }

  return roman;
}
