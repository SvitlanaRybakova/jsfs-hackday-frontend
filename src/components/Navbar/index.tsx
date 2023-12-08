import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { RiMenuLine } from 'react-icons/ri';
import Route from './Route';
import { routes } from '../../routes';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className='bg-bg_navbar'>
      <div
        className={clsx('px-4 py-2', 'flex justify-between',  'container mx-auto')}
      >
        <div></div>
        <div
          className={clsx(
            toggleMenu
              ? 'md:flex  md:pt-0 pt-10 w-full md:w-auto'
              : 'hidden md:flex'
          )}
          id='menu'
        >
          <ul >
            {routes.map((route) => (
              <li
                className={clsx(
                  'py-2 px-3',
                  'md:inline-block md:border-none',
                  'cursor-pointer hover:text-primery_pointer'
                )}
                key={uuidv4()}
              >
                <Route path={route.path} name={route.name} icon={route.icon} />
              </li>
            ))}
          </ul>
        </div>
        <div className='cursor-pointer md:hidden'>
          <input className='menu-btn hidden' type='checkbox' id='menu-btn' />
          <label
            className='menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none'
            htmlFor='menu-btn'
          >
            <span
              onClick={handleToggle}
              className='bg-white-darkest flex items-center relative'
            >
              <RiMenuLine />
            </span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Navbar;