// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'All Admins',
    path: '/dashboard/admin',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Authorized Users',
    path: '/dashboard/user',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'All Videos',
    path: '/dashboard/viewRequest',
    icon: getIcon('eva:file-text-fill'),
  },
  // {
  //   title: 'Create Request',
  //   path: '/dashboard/create',
  //   icon: getIcon('eva:shopping-bag-fill'),
  // },
  // {
  //   title: 'View Requests',
  //   path: '/dashboard/viewRequest',
  //   icon: getIcon('eva:file-text-fill'),
  // }
];

export default navConfig;
