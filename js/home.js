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
            <td>${employeePayrollData._startDate}</td>
            <td>
               <img name="${employeePayrollData._id}" src="../assets/icons/delete-black-18dp.svg" alt="delete" onclick="remove(this)">
               <img name="${employeePayrollData._id}" src="../assets/icons/create-black-18dp.svg" alt="edit" onclick="update(this)">
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