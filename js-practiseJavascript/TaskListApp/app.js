//Load all UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');

loadEventListners();

//load event listners
function loadEventListners() {
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task events
  form.addEventListener('submit', addTask);
  //remove tasks
  taskList.addEventListener('click', removeTask);
  //clear tasks
  clearBtn.addEventListener('click', clearBtnEvent);
  //filter 
  filter.addEventListener('keyup', filterEvent);
}

function getTasks() {
  let data;
  if (localStorage.getItem('tasks') === null) {
    data = [];
  }
  else {
    data = JSON.parse(localStorage.getItem('tasks'));
  }
  data.forEach(function (task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
  })

}

function addTask(e) {
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);

  //add to local storage
  addToLocalStorage(taskInput.value);
  taskInput.value = "";
  e.preventDefault();
}

function addToLocalStorage(task) {
  let data;
  if (localStorage.getItem('tasks') === null) {
    data = [];
  }
  else {
    data = JSON.parse(localStorage.getItem('tasks'));
  }
  data.push(task);
  localStorage.setItem('tasks', JSON.stringify(data));

}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure to remove task ? ')) {
      e.target.parentElement.parentElement.remove();
    }
    removeFromLocalStorage(e.target.parentElement.parentElement.textContent);
  }
}
function removeFromLocalStorage(item) {
  let data;
  if (localStorage.getItem('tasks') === null) {
    data = [];
  }
  else {
    data = JSON.parse(localStorage.getItem('tasks'));
  }

  data.forEach(function (task, index) {
    if (task === item) {
      data.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(data));
}

function clearBtnEvent(e) {
  // taskList.innerHTML='';

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  localStorage.clear();
}

function filterEvent(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });

}