import { FC, ReactNode } from 'react';

type CardProps = {
  src: string;
  children?: ReactNode;
};

const Card: FC<CardProps> = ({ src, children }) => {
  return (
    <div className='max-w-[300px] bg-white border border-gray-200 rounded-lg shadow'>
      <img className='p-2 rounded-t-lg' src={src} alt={'Image'} />

      <div className='px-5 pb-3 flex items-center justify-end'>
       
        {children}
      </div>
    </div>
  );
};

export default Card;