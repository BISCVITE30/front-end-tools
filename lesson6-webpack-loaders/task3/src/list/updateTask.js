import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list-item__checkbox');

  if (!isCheckbox) {
    return;
  }
  const tasksList = getItem('tasksList');

  const taskId = e.target.dataset.id;
  const { text } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };
  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onDeleteTask = e => {
  const isDeleteBtn = e.target.classList.contains('list-item__delete-btn');

  if (!isDeleteBtn) {
    return;
  }

  const tasksList = getItem('tasksList');
  const taskId = e.target.dataset.id;
  const { id } = tasksList.find(task => task.id === taskId);

  deleteTask(id)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Update data in database
// 3. read new data from server
// 4. Save new data to Front-end storage
// 5. Update UI based on new data
