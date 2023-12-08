import { FaCamera } from 'react-icons/fa';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';


export const routes = [
  {
    name: 'Home',
    path: '/',
    icon: <IoHome size={15} />,
  },
  {
    name: 'Gallery',
    path: '/gallery',
    icon: <FaCamera size={15} />,
  },
  {
    name: 'Add photo',
    path: '/upload-photo',
    icon: <MdOutlinePermContactCalendar size={15} />,
  },

];

export const EDIT_PHOTOS_PATH = '/edit-photos/';