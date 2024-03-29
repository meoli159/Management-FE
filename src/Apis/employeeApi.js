import { axiosClient } from './AxiosInstance';

export const fetchEmployees = async () => {
  const result = await axiosClient.get('/employees');
  return result;
};
export const fetchEmployeeById = async (id) => {
  const result = await axiosClient.get(`/employees/${id}`);
  return result;
};

export const createEmployee = async (employeeData) => {
  const result = await axiosClient.post('/employees', employeeData);
  return result;
};

export const updateEmployee = async (id, updatedData) => {
  const result = await axiosClient.put(`/employees/${id}`, updatedData);
  return result;
};

export const removeEmployee = async (id) => {
  const result = await axiosClient.delete(`/employees/${id}`);
  return result;
};
