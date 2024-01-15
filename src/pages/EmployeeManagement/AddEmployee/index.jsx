import { useState } from 'react';
import { InputField } from '../../../Components/InputField.jsx';
import { SelectField } from '../../../Components/SelectField.jsx';
import { createEmployee } from '../../../Apis/userApi.js'; // replace with your actual service file
import './style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function AddEmployee() {
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

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createEmployee(employee);
      console.log(result);
      toast.success('Employee added successfully!');
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while adding the employee.');
    }
  };
  console.log(employee);
  return (
    <div className="add-employee-container">
      <ToastContainer />
      <h1>Thêm nhân viên</h1>
      <form className="row g-3 m-0" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <InputField label="Tên nhân viên:" type="text" name="name" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <InputField
            label="Số điện thoại nhân viên:"
            type="text"
            name="phoneNumber"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputField label="Email nhân viên:" type="email" name="email" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày sinh nhân viên:"
            type="date"
            name="birthDate"
            onChange={handleChange}
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
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Chức vụ nhân viên:"
            type="text"
            name="position"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Bộ phận nhân viên:"
            type="text"
            name="department"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày bắt đầu làm việc:"
            type="date"
            name="startDate"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày kết thúc làm việc:"
            type="date"
            name="endDate"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Mức lương của nhân viên:"
            type="number"
            name="salary"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Thời gian làm thêm của nhân viên:"
            type="number"
            name="overtime"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày nghỉ phép của nhân viên:"
            type="date"
            name="leaveDate"
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Thêm
          </button>
        </div>
      </form>
    </div>
  );
}
