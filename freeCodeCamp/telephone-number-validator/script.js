document.getElementById('check-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  const resultsDiv = document.getElementById('results-div');
  
  if (userInput.trim() === '') {
      alert('Please provide a phone number');
      return;
  }

  if (!isValidPhoneNumber(userInput)) {
      resultsDiv.textContent = 'Invalid US number: ' + userInput;
  } else {
      resultsDiv.textContent = 'Valid US number: ' + userInput;
  }
});

document.getElementById('clear-btn').addEventListener('click', function() {
  document.getElementById('user-input').value = '';
  document.getElementById('results-div').textContent = '';
});

function isValidPhoneNumber(phoneNumber) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
  return regex.test(phoneNumber);
}


function formatPhoneNumber(phoneNumber) {
  return phoneNumber.replace(/[^0-9]/g, ''); 
}
