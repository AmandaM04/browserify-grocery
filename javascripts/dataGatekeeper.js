const loadDepartments = require('./departments');
const loadItems = require('./items');
const departmentDom = require('./departmentdom');
const data = require('./data');

const showItemsOnLoad = function () {
  const itemsData = JSON.parse(this.responseText).items;
  console.log('itemsData', itemsData);
  data.setItems(itemsData);
};

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
  loadItems(showItemsOnLoad, noLoad);
};

module.exports = {
  success,
};
