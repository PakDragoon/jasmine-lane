// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Others',
        items: [
          { title: 'About Us', path: 'about-us' },
          { title: 'Contact Us', path: 'contact-us' },
          { title: 'FAQs', path: 'faqs' },
        ],
      },
      {
        subheader: 'Authentication',
        items: [
          { title: 'Login', path: '/login' },
          { title: 'Register', path: '/register' },
        ],
      },
      {
        subheader: 'Error',
        items: [
          { title: 'Page 404', path: '/404' },
          { title: 'Page 500', path: '/500' },
        ],
      },
      {
        subheader: 'Dashboard',
        items: [{ title: 'Dashboard', path: '/dashboard/app' }],
      },
    ],
  },
  // {
  //   title: 'Documentation',
  //   icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
  //   path: 'home',
  // },
];

export default menuConfig;
