import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Overview } from './pages/Overview'; // added
import { ReportOverview } from './pages/ReportOverview'; // added
import { StatisticsOverview } from './pages/StatisticsOverview'; // added
import { EmployeeList } from './pages/EmployeeManagement/EmployeeList'; // added
import { AddNewEmployee } from './pages/EmployeeManagement/AddNewEmployee'; // added
import { UpdateEmployeeInfo } from './pages/EmployeeManagement/UpdateEmployeeInfo'; // added
import { AccountInfo } from './pages/Admin/AccountInfo'; // added
import { UpdateAccount } from './pages/Admin/UpdateAccount'; // added
import { ChangePassword } from './pages/Admin/ChangePassword'; // added
import { MainLayout } from './Layouts/mainLayout';
import { Login } from './pages/Login';
// import Register from './pages/Auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Overview />} />
          <Route path="tong-quan">
            <Route path="xem" element={<Overview />} />
            <Route path="bao-cao" element={<ReportOverview />} />
            <Route path="thong-ke" element={<StatisticsOverview />} />
          </Route>
          <Route path="quan-ly-nhan-vien">
            <Route path="danh-sach" element={<EmployeeList />} />
            <Route path="them-moi" element={<AddNewEmployee />} />
            <Route path="cap-nhat" element={<UpdateEmployeeInfo />} />
          </Route>
          <Route path="tai-khoan">
            <Route path="thong-tin" element={<AccountInfo />} />
            <Route path="cap-nhat" element={<UpdateAccount />} />
            <Route path="doi-mat-khau" element={<ChangePassword />} />
          </Route>
        </Route>
        <Route path="dang-nhap" element={<Login />} />
        {/* <Route path="auth/register" element={<Register />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
