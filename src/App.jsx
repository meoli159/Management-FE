import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/tong-quan/xem" />} />
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
      </Suspense>
    </BrowserRouter>
  );
}

// Layouts
const MainLayout = lazy(() => import('./Layouts/MainLayout').then((module) => ({ default: module.MainLayout })));

// Pages
const Login = lazy(() => import('./pages/Login').then((module) => ({ default: module.Login })));
const NotFound = lazy(() => import('./pages/NotFound').then((module) => ({ default: module.NotFound })));

// Pages - Overview
const Overview = lazy(() => import('./pages/Overview').then((module) => ({ default: module.Overview })));
const ReportOverview = lazy(() =>
  import('./pages/ReportOverview').then((module) => ({ default: module.ReportOverview }))
);
const StatisticsOverview = lazy(() =>
  import('./pages/StatisticsOverview').then((module) => ({ default: module.StatisticsOverview }))
);

// Pages - EmployeeManagement
const EmployeeList = lazy(() =>
  import('./pages/EmployeeManagement/EmployeeList').then((module) => ({ default: module.EmployeeList }))
);
const AddNewEmployee = lazy(() =>
  import('./pages/EmployeeManagement/AddNewEmployee').then((module) => ({ default: module.AddNewEmployee }))
);
const UpdateEmployeeInfo = lazy(() =>
  import('./pages/EmployeeManagement/UpdateEmployeeInfo').then((module) => ({ default: module.UpdateEmployeeInfo }))
);

// Pages - Admin
const AccountInfo = lazy(() => import('./pages/Admin/AccountInfo').then((module) => ({ default: module.AccountInfo })));
const UpdateAccount = lazy(() =>
  import('./pages/Admin/UpdateAccount').then((module) => ({ default: module.UpdateAccount }))
);
const ChangePassword = lazy(() =>
  import('./pages/Admin/ChangePassword').then((module) => ({ default: module.ChangePassword }))
);
