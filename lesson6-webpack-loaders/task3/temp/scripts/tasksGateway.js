import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
var baseUrl = 'https://661cc3b1e7b95ad7fa6b0d59.mockapi.io/api/v1/tasks';
export var getTasksList = function getTasksList() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  });
};
export var createTask = function createTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};
export var updateTask = function updateTask(taskId, updatedTaskData) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedTaskData)
  });
};
export var deleteTask = function deleteTask(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};