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
  desktopMenu.findIndex(value => value === itemName);
export const getMobileOrder = itemName =>
  mobileMenu.findIndex(value => value === itemName);