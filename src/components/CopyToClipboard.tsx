import clsx from 'clsx';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { IoCopy } from 'react-icons/io5';
import SuccessAlert from '../components/SuccessAlert';

const CopyToClipboardComponent = ({ id }: { id: string }) => {
  const pathToCollection = `${window.location.href}/${id}`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className='p-3 flex items-center justify-center flex-wrap'>
      {pathToCollection}
      <CopyToClipboard text={pathToCollection} onCopy={handleCopy}>
        <button
          className={clsx(
            'px-2 py-2 mx-5',
            'bg-primery_pointer rounded-md',
            'focus:outline-none cursor-pointer',
            'relative'
          )}
        >
          <IoCopy size={14} color={'white'} />
        </button>
      </CopyToClipboard>

      {copied && (
        <div className='absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <SuccessAlert text={'Copied'} />
        </div>
      )}
    </div>
  );
};

export default CopyToClipboardComponent;