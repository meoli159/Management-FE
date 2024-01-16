import { useEffect, useState } from 'react';
import { InputField } from '../../../Components/InputField.jsx';
import { SelectField } from '../../../Components/SelectField.jsx';
import { fetchEmployeeById, updateEmployee } from '../../../Apis/employeeApi.js';
import './style.css';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';

export function UpdateEmployee() {
  const { id } = useParams();
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
  console.log(id, employee);
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
    const toastId = toast.loading('Đang cập nhật nhân viên...');
    setIsLoading(true);
    try {
      await updateEmployee(id, employee);
      toast.update(toastId, {
        render: 'Đã cập nhật  nhân viên thành công!',
        type: 'success',
        isLoading: false,
        autoClose: true,
        closeOnClick: true,
      });
    } catch (error) {
      setIsLoading(false);
      toast.update(toastId, {
        render: 'Đã xảy ra lỗi khi cập nhật nhân viên.',
        type: 'error',
        isLoading: false,
        autoClose: true,
        closeOnClick: true,
      });
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
      <form className="row g-3 m-0 " onSubmit={handleSubmit} noValidate>
        <div className="col-md-6">
          <InputField
            label="Tên nhân viên:"
            type="text"
            name="name"
            onChange={handleChange}
            value={employee.name}
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
            value={employee.phoneNumber}
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
            value={employee.email}
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
            value={employee.birthDate}
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
            value={employee.gender}
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
            value={employee.position}
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
            value={employee.department}
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
            value={employee.startDate}
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
            value={employee.endDate}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Mức lương của nhân viên:"
            type="number"
            name="salary"
            onChange={handleChange}
            value={employee.salary}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Thời gian làm thêm của nhân viên:"
            type="number"
            name="overtime"
            onChange={handleChange}
            value={employee.overtime}
          />
        </div>
        <div className="col-md-6">
          <InputField
            label="Ngày nghỉ phép của nhân viên:"
            type="date"
            name="leaveDate"
            onChange={handleChange}
            value={employee.leaveDate}
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
