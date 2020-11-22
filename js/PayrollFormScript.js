window.addEventListener('DOMContentLoaded', (event) => {
   const name = document.querySelector('#name');
   const textError = document.querySelector('.text-error');
   name.addEventListener('input', function() {
      if(name.value.length == 0) {
         textError.textContent = "";
         return;
      }
      try {
         (new EmployeePayrollData()).name = name.value;
         textError.textContent = "";
      }
      catch (e) {
         textError.textContent = e;
      }
   });

   const day = document.getElementById('day');
   const month = document.getElementById('month');
   const year = document.getElementById('year');
   const dateError = document.querySelector('.date-error');
   year.addEventListener('input', function() {
      try {
         (new EmployeePayrollData()).startDate = new Date(year.value, month.value - 1, day.value);
         dateError.textContent = "";
      }
      catch (e) {
         dateError.textContent = e;
      }
   });
   month.addEventListener('input', function() {
      try {
         (new EmployeePayrollData()).startDate = new Date(year.value, month.value - 1, day.value);
         dateError.textContent = "";
      }
      catch (e) {
         dateError.textContent = e;
      }
   });
   day.addEventListener('input', function() {
      try {
         (new EmployeePayrollData()).startDate = new Date(year.value, month.value - 1, day.value);
         dateError.textContent = "";
      }
      catch (e) {
         dateError.textContent = e;
      }
   });

   const salary = document.querySelector('#salary');
   const output = document.querySelector('.salary-output');
   output.textContent = salary.value;
   salary.addEventListener('input', function() {
      output.textContent = salary.value;
   });
});

const save = () => {
   try {
      let employeePayrollData = createEmployeePayroll();
      createAndUpdateStorage(employeePayrollData);
   } catch (e) {
      return;
   }
}

function createAndUpdateStorage(employeePayrollData) {
   let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
   if(employeePayrollList != undefined)
      employeePayrollList.push(employeePayrollData);
   else
      employeePayrollList = [employeePayrollData];
   alert(employeePayrollList.toString());
   localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

const createEmployeePayroll = () => {
   let employeePayrollData = new EmployeePayrollData();
   try {
      employeePayrollData.name = getInputValueById('#name');
   } catch (e) {
      setTextValue('.text-error', e);
      throw e;
   }
   employeePayrollData.id = createNewEmployeeId();
   employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
   employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
   employeePayrollData.department = getSelectedValues('[type=checkbox]');
   employeePayrollData.salary = getInputValueById('#salary');
   employeePayrollData.notes = getInputValueById('#notes');
   employeePayrollData.startDate = new Date(getInputValueById('#year'), getInputValueById('#month')-1, getInputValueById('#day'));
   alert(employeePayrollData.toString());
   return employeePayrollData;
}

const createNewEmployeeId = () => {
   let empId = localStorage.getItem("EmployeeId");
   empId = !empId ? 1 : (parseInt(empId)+1).toString();
   localStorage.setItem("EmployeeId", empId);
   return empId;
}

const getSelectedValues = (propertyValue) => {
   let allItems = document.querySelectorAll(propertyValue);
   let selectedItems = [];
   allItems.forEach(item => {
      if(item.checked)
         selectedItems.push(item.value);
   });
   return selectedItems;
}

const getInputValueById = (id) => {
   let value = document.querySelector(id).value;
   return value;
}

const getInputElementValue = (id) => {
   let value = document.getElementById(id).value;
   return value;
}

const resetForm = () => {
   setValue('#name', '');
   unsetSelectedValues('[name=profile]');
   unsetSelectedValues('[name=gender]');
   unsetSelectedValues('[name=department]');
   setValue('#salary', '');
   setValue('#notes', '');
   setValue('#day', '1');
   setValue('#month', 'January');
   setValue('#year', '2020');
}

const unsetSelectedValues = (propertyValue) => {
   let allItems = document.querySelectorAll(propertyValue);
   allItems.forEach(item => {
      item.checked = false;
   });
}

const setTextValue = (id, value) => {
   const element = document.querySelector(id);
   element.textContent = value;
}

const setValue = (id, value) => {
   const element = document.querySelector(id);
   element.value = value;
}