import {
  FiBookOpen as BookIcon,
  FiHome as HomeIcon,
  FiLogOut as LogoutIcon,
} from 'react-icons/fi';

const iconSize = 20;

export const MENU_ITEMS = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'Books',
    href: '/books',
    icon: <BookIcon size={iconSize} />,
    isShow: true,
    eventName: 'Pages: Books',
    type: 'Pages',
  },
  {
    title: 'Logout',
    href: '#',
    icon: <LogoutIcon size={iconSize} />,
    isShow: true,
    eventName: 'Action: Logout',
    type: 'Action',
    onClick: () => {
      localStorage.removeItem("token");
      window.location.reload();
    },
  }
];