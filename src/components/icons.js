import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInfoCircle,
  faQuestionCircle,
  faSignOutAlt,
  faPhone,
  faCompactDisc,
  faCreditCard,
  faPlane,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

const addIconsToLib = () => {
  library.add(
    faInfoCircle,
    faQuestionCircle,
    faSignOutAlt,
    faPhone,
    faCompactDisc,
    faCreditCard,
    faPlane,
    faUserCircle
  );
};

export default addIconsToLib;
