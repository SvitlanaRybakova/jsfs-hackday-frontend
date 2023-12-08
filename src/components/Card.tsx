import { FC, ReactNode } from 'react';
import { MdCloudDownload } from 'react-icons/md';

type CardProps = {
  src: string;
  handleDownloadClick: (image: string) => void;
  children?: ReactNode;
};

const Card: FC<CardProps> = ({ src, handleDownloadClick, children }) => {
  console.log("hello from Card", src);
  
  const handleClick = () => {
    handleDownloadClick && handleDownloadClick(src);
  };

  return (
    <div className='max-w-[300px] bg-white border border-gray-200 rounded-lg shadow'>
      <img className='p-2 rounded-t-lg' src={src} alt={'Image'} />

      <div className='px-5 pb-3 flex items-center justify-end'>
        <div
          aria-label='button'
          className='text-3xl text-slate-600 cursor-pointer hover:text-primery_pointer'
          onClick={handleClick}
        >
          <MdCloudDownload size={'24px'} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;