document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer() {
  // console.log('hi');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    const customer = JSON.parse(this.responseText);
    const output = `
        <ul>
        <li>${customer.id}</li>
        <li>${customer.name}</li>
        <li>${customer.company}</li>
        <li>${customer.mobile}</li>
        </ul>
        `;
    document.getElementById('customer').innerHTML = output;
  }
  xhr.send();


}
function loadCustomers() {
  // console.log('hi');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    const customers = JSON.parse(this.responseText);
    let output='';
    customers.forEach(function (customer) {
      output += `
      <ul>
        <li>${customer.id}</li>
        <li>${customer.name}</li>
        <li>${customer.company}</li>
        <li>${customer.mobile}</li>
      </ul>
      `;
    })
    document.getElementById('customers').innerHTML = output;
  }
  xhr.send();

}