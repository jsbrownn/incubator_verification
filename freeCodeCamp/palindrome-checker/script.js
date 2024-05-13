let input = document.getElementById('text-input')
let btn = document.querySelector('#check-btn')
let result = document.getElementById('result')

function checkIsPalindrome (word,reversed) {
  if (word.trim() === '') {
        alert('Please input a value');
    } else if (word === reversed) {
      result.textContent = input.value + ' is a palindrome';
    } else {
        result.textContent = input.value + ' is not a palindrome';
    }
}
function handlerChange(event) {
  const word = document.getElementById('text-input').value.toLowerCase().trim().replace(/[^a-z0-9]/ig, '');
  let reversed = word.split('').reverse().join('');
  console.log(word,reversed)
  checkIsPalindrome (word,reversed)
}
btn.addEventListener('click',handlerChange)


