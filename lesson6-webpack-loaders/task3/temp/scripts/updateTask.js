import "core-js/modules/es.array.find.js";
import "core-js/modules/es.object.to-string.js";
import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';
export var onToggleTask = function onToggleTask(e) {
  var isCheckbox = e.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) {
    return;
  }
  var tasksList = getItem('tasksList');
  var taskId = e.target.dataset.id;
  var _tasksList$find = tasksList.find(function (task) {
      return task.id === taskId;
    }),
    text = _tasksList$find.text;
  var done = e.target.checked;
  var updatedTask = {
    text: text,
    done: done,
    finishDate: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};
export var onDeleteTask = function onDeleteTask(e) {
  var isDeleteBtn = e.target.classList.contains('list-item__delete-btn');
  if (!isDeleteBtn) {
    return;
  }
  var tasksList = getItem('tasksList');
  var taskId = e.target.dataset.id;
  var _tasksList$find2 = tasksList.find(function (task) {
      return task.id === taskId;
    }),
    id = _tasksList$find2.id;
  deleteTask(id).then(function () {
    return getTasksList();
  }).then(function (newTasksList) {
    setItem('tasksList', newTasksList);
    renderTasks();
  });
};

// 1. Prepare data
// 2. Update data in database
// 3. read new data from server
// 4. Save new data to Front-end storage
// 5. Update UI based on new data