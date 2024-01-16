import { useState } from 'react';
import { InputField } from '../../../Components/InputField.jsx';
import { SelectField } from '../../../Components/SelectField.jsx';
import { createEmployee } from '../../../Apis/employeeApi.js';
import './style.css';
import { toast, ToastContainer } from 'react-toastify';

export function AddEmployee() {
  const [isLoading, setIsLoading] = useState(false);
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
    e.currentTarget.classList.add('was-validated');

    if (!e.currentTarget.checkValidity()) {
      return;
    }

    const toastId = toast.loading('Đang thêm nhân viên...');
    setIsLoading(true);
    try {
      await createEmployee(employee);
      setIsLoading(false);
      toast.update(toastId, {
        render: 'Đã thêm nhân viên thành công!',
        type: 'success',
        isLoading: false,
        autoClose: true,
        closeOnClick: true,
      });
    } catch (error) {
      setIsLoading(false);
      toast.update(toastId, {
        render: 'Đã xảy ra lỗi khi thêm nhân viên.',
        type: 'error',
        isLoading: false,
        autoClose: true,
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="add-employee-container">
      <h1>Thêm nhân viên</h1>
      <form className="row g-3 m-0 needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="col-md-6">
          <InputField
            label="Tên nhân viên:"
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Vui lòng điền tên nhân viên.</div>
        </div>
        <div className="col-md-6">
          <InputField
            label="Số điện thoại nhân viên:"
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Vui lòng điền số điện thoại.</div>
        </div>
        <div className="col-md-6">
          <InputField
            label="Email nhân viên:"
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Vui lòng điền email.</div>
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày sinh nhân viên:"
            type="date"
            name="birthDate"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Vui lòng chọn ngày sinh.</div>
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
            required
          />
          <div className="invalid-feedback">Vui lòng chọn giới tính.</div>
        </div>
        <div className="col-md-6">
          <InputField
            label="Chức vụ nhân viên:"
            type="text"
            name="position"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Vui lòng điền chức vụ.</div>
        </div>
        <div className="col-md-6">
          <InputField
            label="Bộ phận nhân viên:"
            type="text"
            name="department"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Vui lòng điền bộ phận.</div>
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày bắt đầu làm việc:"
            type="date"
            name="startDate"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">Vui lòng chọn ngày bắt đầu làm việc.</div>
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
            {isLoading && (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            &nbsp;Thêm
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
