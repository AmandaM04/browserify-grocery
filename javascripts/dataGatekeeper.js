const loadDepartments = require('./departments');
const departmentDom = require('./departmentdom');
const data = require('./data');

const showOnLoad = function () {
  const departmentsData = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsData);
  departmentDom(departmentsData);
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
