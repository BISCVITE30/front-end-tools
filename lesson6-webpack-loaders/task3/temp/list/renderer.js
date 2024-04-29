import { getItem } from './storage.js';
import './list.scss';
const listElem = document.querySelector('.list');
const compareTasks = (a, b) => {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  return new Date(b.finishDate) - new Date(a.finishDate);
};
const createCheckbox = ({
  done,
  id
}) => {
  const checkBoxElem = document.createElement('input');
  checkBoxElem.setAttribute('type', 'checkbox');
  checkBoxElem.setAttribute('data-id', id);
  checkBoxElem.checked = done;
  checkBoxElem.classList.add('list-item__checkbox');
  return checkBoxElem;
};
const createDeleteBtn = ({
  id
}) => {
  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  deleteBtnElem.setAttribute('data-id', id);
  return deleteBtnElem;
};
const createListItem = ({
  text,
  done,
  id
}) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  const checkboxElem = createCheckbox({
    done,
    id
  });
  if (done) {
    listItemElem.classList.add('list-item_done');
  }
  const textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  const deleteBtnElem = createDeleteBtn({
    id
  });
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};
export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);
  listElem.append(...tasksElems);
};