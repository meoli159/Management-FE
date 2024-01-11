import { useEffect, useState } from 'react';
import { GetUser } from '../../../Apis/userApi';
import './style.css';
export function EmployeeList() {
  const [employees, getEmployees] = useState([]);
  useEffect(() => {
    GetUser().then((r) => console.log(getEmployees(r.data)));
  }, []);
  return (
    <div className="table-container">
      <h2>Employee Information</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID nhân viên</th>
              <th>Tên nhân viên</th>
              <th>Số điện thoại nhân viên</th>
              <th>Email nhân viên</th>
              <th>Ngày sinh nhân viên</th>
              <th>Giới tính nhân viên</th>
              <th>Chức vụ nhân viên</th>
              <th>Bộ phận nhân viên</th>
              <th>Ngày bắt đầu làm việc</th>
              <th>Ngày kết thúc làm việc</th>
              <th>Mức lương của nhân viên</th>
              <th>Thời gian làm thêm của nhân viên</th>
              <th>Ngày nghỉ phép của nhân viên</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.birthDate}</td>
                <td>{employee.gender}</td>
                <td>{employee.position}</td>
                <td>{employee.department}</td>
                <td>{employee.startDate}</td>
                <td>{employee.endDate}</td>
                <td>{employee.salary}</td>
                <td>{employee.overtime}</td>
                <td>{employee.vacationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}