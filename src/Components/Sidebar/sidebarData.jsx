import { HiMiniUserGroup, HiMiniUser } from 'react-icons/hi2';

import { AiFillDashboard } from 'react-icons/ai';
export const sidebarData = [
  {
    title: 'Tổng quan',
    icon: <AiFillDashboard />,
    subItems: [
      { subItemTitle: 'Xem tổng quan', path: '/tong-quan/xem' },
      { subItemTitle: 'Báo cáo tổng quan', path: '/tong-quan/bao-cao' },
      { subItemTitle: 'Thống kê tổng quan', path: '/tong-quan/thong-ke' },
    ],
  },
  {
    title: 'Quản lý nhân viên',
    icon: <HiMiniUserGroup />,
    subItems: [
      { subItemTitle: 'Thêm nhân viên mới', path: '/quan-ly-nhan-vien/them-moi' },
      { subItemTitle: 'Cập nhật thông tin nhân viên', path: '/quan-ly-nhan-vien/cap-nhat' },
      { subItemTitle: 'Danh sách nhân viên', path: '/quan-ly-nhan-vien/danh-sach' },
    ],
  },
  {
    title: 'Tài khoản',
    icon: <HiMiniUser />,
    subItems: [
      { subItemTitle: 'Thông tin tài khoản', path: '/tai-khoan/thong-tin' },
      { subItemTitle: 'Cập nhật tài khoản', path: '/tai-khoan/cap-nhat' },
      { subItemTitle: 'Đổi mật khẩu', path: '/tai-khoan/doi-mat-khau' },
    ],
  },
];
