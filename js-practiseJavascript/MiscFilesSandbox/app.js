
// //MODULE PATTERN
// const uiCtrl = (function () {

//   let text = 'Awesome Ishu';
//   const changeText = function () {
//     const h1Element = document.querySelector('h1');
//     h1Element.textContent = text;

//   }

//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// uiCtrl.callChangeText();

//REVELEAING MODULE PATTERN

const EmployeeList = (() => {
  let data = [];

  const add = (item) => {
    data.push(item);
  }

  const get = (id) => {
    return data.find(m => {
      return m.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
})();
EmployeeList.add({ id: 1, name: 'Awesome Ishu' });
EmployeeList.add({ id: 2, name: 'FINSIH js' });

console.log(EmployeeList.get(1));
