window.addEventListener('DOMContentLoaded', (event) => {
   createInnerHtml();
});

const createInnerHtml = () => {
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
   let empPayrollList = createEmployeePayrollJSON();
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
               <img id="1" src="../assets/icons/delete-black-18dp.svg" alt="delete" onclick="remove(this)">
               <img id="1" src="../assets/icons/create-black-18dp.svg" alt="edit" onclick="update(this)">
            </td>
         </tr>
      `;
   }
   document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
   let empPayrollListLocal = [
      {
         _name: "Jayesh Chaudhari",
         _gender: "Male",
         _department: [
            'HR',
            'Finance'
         ],
         _salary: '400000',
         _startDate: '25 Nov 2019',
         _note: '',
         _id: new Date().getTime(),
         _profilePic: '../assets/profile-images/Ellipse -5.png'
      },
      {
         _name: "Ajeesh Ajayan",
         _gender: "Male",
         _department: [
            'Engineering'
         ],
         _salary: '300000',
         _startDate: '22 Apr 2019',
         _note: '',
         _id: new Date().getTime() + 1,
         _profilePic: '../assets/profile-images/Ellipse -8.png'
      }
   ];
   return empPayrollListLocal;
}


const getDeptHtml = (deptList) => {
   let deptHtml = '';
   for (const dept of deptList)
      deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`;
   return deptHtml;
}