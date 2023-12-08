import { NavLink } from 'react-router-dom';

type routeProp = {
  path: string;
  name: string;
  icon?: React.ReactNode;
};
const Route = ({ path, name, icon }: routeProp) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? 'text-primery_pointer' : '')}
    >
      {icon && (
        <p className='flex gap-[10px] items-center justify-start'>
          {icon} {name}
        </p>
      )}
    </NavLink>
  );
};

export default Route;