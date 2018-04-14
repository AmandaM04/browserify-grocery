const outputDiv = document.getElementById('departments');

const domString = (departmentArray) => {
  let domString = '';
  departmentArray.forEach((department) => {
    domString += `<div class="col-sm-3 department">`;
    domString +=   `<h3 class="hide">${department.name}</h3>`;
    domString +=   `<img class="department-image"src=${department.img}>`;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (departmentArray) => {
  outputDiv.innerHTML = domString(departmentArray);
};

module.exports = printToDom;
