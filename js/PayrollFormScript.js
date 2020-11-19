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