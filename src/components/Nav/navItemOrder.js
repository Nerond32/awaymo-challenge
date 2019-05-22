const desktopMenu = [
  'Home',
  'Flights',
  'About',
  'FAQ',
  'Support',
  'Contact',
  'ProfileInfo',
  'Profile',
  'My Bookings',
  'My Payments',
  'Log Out',
  'Resume Application'
];

const mobileMenu = [
  'ProfileInfo',
  'Home',
  'Flights',
  'About',
  'Profile',
  'My Bookings',
  'My Payments',
  'Support',
  'Contact',
  'Log Out',
  'About',
  'FAQ',
  'Resume Application'
];

export const getDesktopOrder = itemName =>
  desktopMenu.indexOf(desktopMenu.filter(value => value === itemName)[0]);
export const getMobileOrder = itemName =>
  mobileMenu.indexOf(desktopMenu.filter(value => value === itemName)[0]);
