const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');


// const dummy = [
//   { id: 1, text: "flower", amount: 50 },
//   { id: 2, text: "cashback", amount: -50 },
//   { id: 3, text: "salary", amount: 500 },
//   { id: 4, text: "Clothes", amount: 150 },
//   { id: 5, text: "Groceries", amount: 250 }
// ]

const localStorageTrans = JSON.parse(localStorage.getItem("expenseTrans"));
const transactions = localStorage.getItem("expenseTrans") !== null ? localStorageTrans : [];

function updateLocalStorage() {
  localStorage.setItem("expenseTrans", JSON.stringify(transactions));
}
const addTransaction = (e) => {
  e.preventDefault();
  console.log('heil');
  let id = generateID();
  const trans = {
    id: id,
    text: text.value,
    amount: amount.value
  }
  transactions.push(trans);
  addTransactionDOM(trans);
  updateLocalStorage();

}

function addTransactionDOM(transaction) {
  const sign = transaction.amount > 0 ? '+' : '-';
  const li = document.createElement('li');
  li.classList.add(transaction.amount > 0 ? 'plus' : 'minus');
  li.innerHTML = `
    ${transaction.text} <span> ${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(li);
}

function generateID() {
  return Math.floor(Math.random() * 10000);
}

transactions.forEach(x => addTransactionDOM(x));
form.addEventListener('submit', addTransaction);
