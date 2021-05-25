//Storage controller

//item controller
const itemCtrl = (function () {
  //Item ctor
  const Item = function (id, name, calorie) {
    this.id = id;
    this.name = name;
    this.calorie = calorie;
  }

  //data structure for app
  const data = {
    items: [{ id: 1, name: 'Aalo chilla', calorie: 1000 },
    { id: 2, name: 'Besan chilla', calorie: 800 },
    { id: 3, name: 'Sabu dana khichdi', calorie: 600 }],
    totalCalorie: 0,
    currentItem: null
  }

  //Public methods
  return {
    getItems: () => { return data.items; },
    logData: function () {
      return data;
    }
  }

})();

//UI controlller
const uiCtrl = (function () {
  //load event handlers
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCalorieInput: '#item-calories'
  }
  //Public methods
  return {
    populateItems: (items) => {
      let html = '';
      items.forEach((item) => {
        html += `
        <li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calorie} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>
        `;
      })
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getUISelectors: () => { return UISelectors; },
    getItemInput: () => {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calorie: document.querySelector(UISelectors.itemCalorieInput).value,
      }

    }
  }
})();


//app Controller
const App = (function (itemCtrl, uiCtrl) {
  //load events 
  const loadEventsHandler = function () {
    const UISelector = uiCtrl.getUISelectors();
    // console.log(UISelector);  
    //add btn click event 
    document.querySelector(UISelector.addBtn).addEventListener('click', itemAddSubmit);

  }
  const itemAddSubmit = function (e) {
    //get input values from ui ctl
    const itemInputs = uiCtrl.getItemInput();
    console.log(itemInputs);

    e.preventDefault();

  }

  //Public methods
  return {
    init: () => {
      const items = itemCtrl.getItems();
      uiCtrl.populateItems(items);


      //load Events Handler
      loadEventsHandler();
    }
  }
})(itemCtrl, uiCtrl);


//Calling Init
App.init()