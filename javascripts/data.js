const loadDepartments = require('./departments');

const showOnLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  console.log('departments', data);
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
