import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<AdminLayout />}>
            <Route path="/" element={<Navigate to="/tong-quan/xem" />} />
            <Route path="tong-quan">
              <Route path="xem" element={<Overview />} />
              <Route path="bao-cao" element={<ReportOverview />} />
              <Route path="thong-ke" element={<StatisticsOverview />} />
            </Route>
            <Route path="quan-ly-nhan-vien">
              <Route path="danh-sach" element={<EmployeeList />} />
              <Route path="them-moi" element={<AddEmployee />} />
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
      </Suspense>
    </BrowserRouter>
  );
}

// Layouts
const AdminLayout = lazy(() =>
  import('./Layouts/AdminLayout').then((module) => ({ default: module.AdminLayout }))
);

// Pages
const Login = lazy(() => import('./pages/Login').then((module) => ({ default: module.Login })));
const NotFound = lazy(() =>
  import('./pages/NotFound').then((module) => ({ default: module.NotFound }))
);

// Pages - Overview
const Overview = lazy(() =>
  import('./pages/Overview').then((module) => ({ default: module.Overview }))
);
const ReportOverview = lazy(() =>
  import('./pages/ReportOverview').then((module) => ({ default: module.ReportOverview }))
);
const StatisticsOverview = lazy(() =>
  import('./pages/StatisticsOverview').then((module) => ({ default: module.StatisticsOverview }))
);

// Pages - EmployeeManagement
const EmployeeList = lazy(() =>
  import('./pages/EmployeeManagement/EmployeeList').then((module) => ({
    default: module.EmployeeList,
  }))
);
const AddEmployee = lazy(() =>
  import('./pages/EmployeeManagement/AddEmployee').then((module) => ({
    default: module.AddEmployee,
  }))
);
const UpdateEmployeeInfo = lazy(() =>
  import('./pages/EmployeeManagement/UpdateEmployeeInfo').then((module) => ({
    default: module.UpdateEmployeeInfo,
  }))
);

// Pages - Admin
const AccountInfo = lazy(() =>
  import('./pages/Admin/AccountInfo').then((module) => ({ default: module.AccountInfo }))
);
const UpdateAccount = lazy(() =>
  import('./pages/Admin/UpdateAccount').then((module) => ({ default: module.UpdateAccount }))
);
const ChangePassword = lazy(() =>
  import('./pages/Admin/ChangePassword').then((module) => ({ default: module.ChangePassword }))
);
