function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.array.sort.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { getItem } from './storage.js';
var listElem = document.querySelector('.list');
var compareTasks = function compareTasks(a, b) {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }
  return new Date(b.finishDate) - new Date(a.finishDate);
};
var createCheckbox = function createCheckbox(_ref) {
  var done = _ref.done,
    id = _ref.id;
  var checkBoxElem = document.createElement('input');
  checkBoxElem.setAttribute('type', 'checkbox');
  checkBoxElem.setAttribute('data-id', id);
  checkBoxElem.checked = done;
  checkBoxElem.classList.add('list-item__checkbox');
  return checkBoxElem;
};
var createDeleteBtn = function createDeleteBtn(_ref2) {
  var id = _ref2.id;
  var deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list-item__delete-btn');
  deleteBtnElem.setAttribute('data-id', id);
  return deleteBtnElem;
};
var createListItem = function createListItem(_ref3) {
  var text = _ref3.text,
    done = _ref3.done,
    id = _ref3.id;
  var listItemElem = document.createElement('li');
  listItemElem.classList.add('list-item', 'list__item');
  var checkboxElem = createCheckbox({
    done: done,
    id: id
  });
  if (done) {
    listItemElem.classList.add('list-item_done');
  }
  var textElem = document.createElement('span');
  textElem.classList.add('list-item__text');
  textElem.textContent = text;
  var deleteBtnElem = createDeleteBtn({
    id: id
  });
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};
export var renderTasks = function renderTasks() {
  var tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  var tasksElems = tasksList.sort(compareTasks).map(createListItem);
  listElem.append.apply(listElem, _toConsumableArray(tasksElems));
};