document.getElementById("loan-form").addEventListener('submit', function (e) {
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  setTimeout(function () {
    calculateResults();
  }, 1500);
  e.preventDefault();
});


function calculateResults() {
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please check your numbers');
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

  }

}

//show error
function showError(message) {
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  card.insertBefore(errorDiv, heading);
  errorDiv.appendChild(document.createTextNode(message));
  //set timeout
  // setTimeout(function () {
  //   document.querySelector('.alert').remove();
  // }, 3000);
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}