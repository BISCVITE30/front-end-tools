import { onCreateTask } from './createTask.js';
import { onToggleTask, onDeleteTask } from './updateTask.js';
export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  const onListClick = event => {
    const isCheckbox = event.target.classList.contains('list-item__checkbox');
    const isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
    if (isCheckbox) {
      onToggleTask(event);
    } else if (isDeleteBtn) {
      onDeleteTask(event);
    }
    return null;
  };
  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onListClick);
};