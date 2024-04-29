import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';
export var onCreateTask = function onCreateTask() {
  var taskTitleInputElem = document.querySelector('.task-input');
  var text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  var newTask = {
    text: text,
    done: false
  };
  createTask(newTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};

// 1. Prepare data
// 2. Write data to database
// 3. read new data from server
// 4. Save new data to Front-end storage
// 5. Update UI based on new data