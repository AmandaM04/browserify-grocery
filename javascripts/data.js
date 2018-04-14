const loadDepartments = require('./departments');
const printToDom = require('./dom');

const showOnLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  printToDom(data);
};

const noLoad = function () {
  console.log('Nothing To See Here');
};

const success = () => {
  loadDepartments(showOnLoad, noLoad);
};

module.exports = {
  success,
};
