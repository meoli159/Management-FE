import { useState } from 'react';
import './style.css';
function InputField({ label, type, name, placeholder, onChange }) {
  return (
    <label>
      {label}
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} />
    </label>
  );
}

export function AddNewEmployee() {
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

  return (
    <div className="form-container">
      <form className="employee-form">
        <InputField
          label="Tên nhân viên:"
          type="text"
          name="name"
          placeholder="Nhập tên nhân viên"
          onChange={handleChange}
        />
        <InputField
          label="Số điện thoại nhân viên:"
          type="text"
          name="phoneNumber"
          placeholder="Nhập số điện thoại nhân viên"
          onChange={handleChange}
        />
        <InputField
          label="Email nhân viên:"
          type="email"
          name="email"
          placeholder="Nhập email nhân viên"
          onChange={handleChange}
        />
        <InputField
          label="Ngày sinh nhân viên:"
          type="date"
          name="birthDate"
          placeholder="Nhập ngày sinh nhân viên"
          onChange={handleChange}
        />
        <InputField
          label="Giới tính nhân viên:"
          type="text"
          name="gender"
          placeholder="Nhập giới tính nhân viên"
          onChange={handleChange}
        />
        <InputField
          label="Chức vụ nhân viên:"
          type="text"
          name="position"
          placeholder="Nhập chức vụ nhân viên"
          onChange={handleChange}
        />
        <InputField
          label="Bộ phận nhân viên:"
          type="text"
          name="department"
          placeholder="Nhập bộ phận nhân viên"
          onChange={handleChange}
        />
        <InputField
          label="Ngày bắt đầu làm việc:"
          type="date"
          name="startDate"
          placeholder="Nhập ngày bắt đầu làm việc"
          onChange={handleChange}
        />
        <InputField
          label="Ngày kết thúc làm việc:"
          type="date"
          name="endDate"
          placeholder="Nhập ngày kết thúc làm việc"
          onChange={handleChange}
        />
        <InputField
          label="Mức lương của nhân viên:"
          type="number"
          name="salary"
          placeholder="Nhập mức lương của nhân viên"
          onChange={handleChange}
        />
        <InputField
          label="Thời gian làm thêm của nhân viên:"
          type="number"
          name="overtime"
          placeholder="Nhập thời gian làm thêm của nhân viên"
          onChange={handleChange}
        />
        <InputField
          label="Ngày nghỉ phép của nhân viên:"
          type="date"
          name="leaveDate"
          placeholder="Nhập ngày nghỉ phép của nhân viên"
          onChange={handleChange}
        />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
}
