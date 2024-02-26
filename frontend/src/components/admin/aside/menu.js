import {
  House,
  LocalMall,
  ManageAccounts,
  Reviews,
  Settings,
  ShoppingCart,
} from '@mui/icons-material';

const menu = [
  {
    icon: <House color='secondary' />,
    title: 'Dashboard',
    slug: '/dashboard',
  },
  {
    icon: <LocalMall color='secondary' />,
    title: 'Products',
    children: [
      {
        title: 'Product',
        slug: '/products',
      },
      {
        title: 'Category',
        slug: '/categories',
      },
      {
        title: 'Property',
        slug: '/properties',
      },
    ],
  },
  {
    icon: <ShoppingCart color='secondary' />,
    title: 'Order',
    slug: '/orders',
  },
  {
    icon: <ManageAccounts color='secondary' />,
    title: 'Accounts',
    slug: '/account',
  },
  {
    icon: <Reviews color='secondary' />,
    title: 'Reviews',
    slug: '/reviews',
  },
  {
    icon: <Settings color='secondary' />,
    title: 'Settings',
    slug: '/settings',
  },
];

export default menu;
