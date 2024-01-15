import { useEffect, useState } from 'react';
import { ExcelDownloadButton } from '../../../Components/ExcelDownloadButton';
import { removeEmployee, fetchEmployees } from '../../../Apis/userApi';
import './style.css';
export function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const deleteHandler = (id) => {
    removeEmployee(id)
      .then(() => {
        console.log('deleted: ', id);
        return fetchEmployees();
      })
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.log('delete error: ', error));
  };

  useEffect(() => {
    fetchEmployees().then((r) => {
      setEmployees(r.data);
      setIsFetching(false);
    });
  }, []);

  return (
    <div className="table-container">
      <ExcelDownloadButton data={employees} filename={'danh-sach-nhan-vien.csv'} />
      <h1>Danh sách nhân viên</h1>
      <div className="table-wrapper border border-black">
        {isFetching ? (
          <div className="spinner-wrapper">
            <strong role="status">Loading...</strong>
            <div className="spinner-border " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <table className="table table-striped table-bordered">
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
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.email}</td>
                  <td>{employee.birthDate}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>{employee.startDate}</td>
                  <td>{employee.endDate}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.overtime}</td>
                  <td>{employee.leaveDate}</td>
                  <td>
                    <button className="btn btn-warning">Sửa</button>
                    <button className="btn btn-danger" onClick={() => deleteHandler(employee.id)}>
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
