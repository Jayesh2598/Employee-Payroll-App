let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
   empPayrollList = getEmployeePayrollDataFromLocalStorage();
   document.querySelector(".emp-count").textContent = empPayrollList.length;
   createInnerHtml();
});

const getEmployeePayrollDataFromLocalStorage = () => {
   return localStorage.getItem('EmployeePayrollList') ?
            JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
   if(empPayrollList.length == 0) return;
   const headerHtml =
      `<tr>
         <th></th>
         <th>Name</th>
         <th>Gender</th>
         <th>Department</th>
         <th>Salary</th>
         <th>Start Date</th>
         <th>Actions</th>
      </tr>`;
   let innerHtml = `${headerHtml}`;
   for (const employeePayrollData of empPayrollList) {
      innerHtml = `${innerHtml}
         <tr>
            <td><img class="profile" src="${employeePayrollData._profilePic}" alt=""></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${stringifyDate(employeePayrollData._startDate)}</td>
            <td>
               <img id="${employeePayrollData._id}" src="../assets/icons/delete-black-18dp.svg" alt="delete" onclick="remove(${employeePayrollData._id})">
               <img id="${employeePayrollData._id}" src="../assets/icons/create-black-18dp.svg" alt="edit" onclick="update(${employeePayrollData._id})">
            </td>
         </tr>
      `;
   }
   document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
   let deptHtml = '';
   for (const dept of deptList)
      deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`;
   return deptHtml;
}

const remove = (empID) => {
   let empPayrollData = empPayrollList.find(empData => empData._id == empID);
   if(!empPayrollData) return;
   if(confirm(`Do you want to delete the record for ${empPayrollData._name}?`)) {
      const index = empPayrollList
                     .map(empData => empData._id)
                     .indexOf(empPayrollData._id);
      empPayrollList.splice(index, 1);
      localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
      document.querySelector(".emp-count").textContent = empPayrollList.length;
      createInnerHtml();
   }
}