import { useEffect, useState } from 'react';
import { InputField } from '../../../Components/InputField.jsx';
import { SelectField } from '../../../Components/SelectField.jsx';
import { fetchEmployeeById, updateEmployee } from '../../../Apis/employeeApi.js';
import './style.css';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

export function UpdateEmployee() {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    birthDate: '',
    gender: '',
    position: '',
    department: '',
    startDate: '',
    endDate: '',
    salary: '',
    overtime: '',
    leaveDate: '',
  });
  console.log(id, employee);
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, employee);
      toast.success('Cập nhật thông tin nhân viên thành công!');
    } catch (error) {
      console.error(error);
      toast.error('Cập nhật thông tin nhân viên không thành công.');
    }
  };
  useEffect(() => {
    const fetchAndSetEmployee = async () => {
      const res = await fetchEmployeeById(id);
      setEmployee(res);
    };

    fetchAndSetEmployee();
  }, [id]);

  return (
    <div className="add-employee-container">
      <h1>Chỉnh sửa thông tin nhân viên</h1>
      <form className="row g-3 m-0" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <InputField
            label="Tên nhân viên:"
            type="text"
            name="name"
            onChange={handleChange}
            value={employee.name}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Số điện thoại nhân viên:"
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            value={employee.phoneNumber}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Email nhân viên:"
            type="email"
            name="email"
            onChange={handleChange}
            value={employee.email}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày sinh nhân viên:"
            type="date"
            name="birthDate"
            onChange={handleChange}
            value={employee.birthDate}
          />
        </div>
        <div className="col-md-6">
          <SelectField
            label="Giới tính nhân viên:"
            name="gender"
            options={[
              { label: 'Chọn giới tính', value: '' },
              { label: 'Nam', value: 'male' },
              { label: 'Nữ', value: 'female' },
              { label: 'Khác', value: 'other' },
            ]}
            onChange={handleChange}
            value={employee.gender}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Chức vụ nhân viên:"
            type="text"
            name="position"
            onChange={handleChange}
            value={employee.position} // Display existing position
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Bộ phận nhân viên:"
            type="text"
            name="department"
            onChange={handleChange}
            value={employee.department} // Display existing department
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày bắt đầu làm việc:"
            type="date"
            name="startDate"
            onChange={handleChange}
            value={employee.startDate} // Display existing start date
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày kết thúc làm việc:"
            type="date"
            name="endDate"
            onChange={handleChange}
            value={employee.endDate} // Display existing end date
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Mức lương của nhân viên:"
            type="number"
            name="salary"
            onChange={handleChange}
            value={employee.salary} // Display existing salary
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Thời gian làm thêm của nhân viên:"
            type="number"
            name="overtime"
            onChange={handleChange}
            value={employee.overtime} // Display existing overtime
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày nghỉ phép của nhân viên:"
            type="date"
            name="leaveDate"
            onChange={handleChange}
            value={employee.leaveDate} // Display existing leave date
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Cập nhật
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
