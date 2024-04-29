import { onCreateTask } from './createTask.js';
import { onToggleTask, onDeleteTask } from './updateTask.js';
export var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  var onListClick = function onListClick(event) {
    var isCheckbox = event.target.classList.contains('list-item__checkbox');
    var isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
    if (isCheckbox) {
      onToggleTask(event);
    } else if (isDeleteBtn) {
      onDeleteTask(event);
    }
    return null;
  };
  var todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onListClick);
};