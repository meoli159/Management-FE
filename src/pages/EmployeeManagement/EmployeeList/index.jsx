import { useEffect, useState } from 'react';
import { ExcelDownloadButton } from '../../../Components/ExcelDownloadButton';
import { removeEmployee, fetchEmployees } from '../../../Apis/employeeApi.js';
import { toast, ToastContainer } from 'react-toastify';
import { IoPersonAdd } from 'react-icons/io5';
import { format } from 'date-fns';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
export function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const navigate = useNavigate();
  const deleteHandler = (id) => {
    removeEmployee(id)
      .then(() => {
        console.log('Deleted employee with ID:', id);
        toast.error('Employee deleted successfully!');
        return fetchEmployees();
      })
      .then((res) => {
        setEmployees(res);
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
        toast.error('An error occurred while deleting the employee.');
      });
  };

  const editHandler = (id) => {
    navigate(`/quan-ly-nhan-vien/cap-nhat/${id}`);
  };

  useEffect(() => {
    fetchEmployees()
      .then((res) => {
        setEmployees(res);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  const formatDate = (date) => format(Date(date), 'dd/MM/yyyy');
  const formatVND = (number) => new Intl.NumberFormat('vi-VN', { currency: 'VND' }).format(number);
  return (
    <div className="table-container">
      <div className="function-bar">
        <Link to="/quan-ly-nhan-vien/them-moi" className="btn btn-primary">
          <IoPersonAdd size={100} />
          Thêm nhân viên
        </Link>
        <ExcelDownloadButton data={employees} filename={'danh-sach-nhan-vien.csv'} />
      </div>
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
                  <td>{formatDate(employee.birthDate)}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>{formatDate(employee.startDate)}</td>
                  <td>{formatDate(employee.endDate)}</td>
                  <td>{formatVND(employee.salary)} vnđ</td>
                  <td>{employee.overtime}</td>
                  <td>{formatDate(employee.leaveDate)}</td>
                  <td>
                    <button className="btn btn-warning" onClick={() => editHandler(employee.id)}>
                      Sửa
                    </button>
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
      <ToastContainer />
    </div>
  );
}
