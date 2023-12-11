import { useEffect, useState } from 'react';


import { CiEdit } from 'react-icons/ci';
import { CiShare2 } from 'react-icons/ci';
import { Link } from 'react-router-dom';

import { EDIT_PHOTOS_PATH } from '../routes';
import Modal from './Modal';
import useHandleModal from '../hooks/useHandleModal';
import CopyToClipboard from './CopyToClipboard';
import SwiperCustom from './SwiperCustom';
import { Photo } from '../interfaces';

type GalleryItemProps = {
  collectionName: Photo[];
};

const GalleryItem: React.FC<GalleryItemProps> = ({ collectionName }) => {
  const title = collectionName[0].collection;



  const { handleModalShow, showModal, handleModalClose } = useHandleModal();
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 530px)').matches) setSlidesPerView(1);
      if (window.matchMedia('(min-width: 650px)').matches) setSlidesPerView(2);
      if (window.matchMedia('(min-width: 800px)').matches) setSlidesPerView(3);
      if (window.matchMedia('(min-width: 1200px)').matches) setSlidesPerView(4);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='bg-[#3435366b] py-10 px-5 my-6  rounded-lg mb-16'>
      <div className='mb-6 flex justify-center items-center'>
        <h2 className='mr-4 uppercase'>{title}</h2>
        <Link
          to={EDIT_PHOTOS_PATH + title}
          className='font-extrabold px-4 hover:text-primery_pointer '
        >
          <CiEdit size={'24px'} />
        </Link>
        <div
          onClick={handleModalShow}
          className='font-extrabold px-4 hover:text-primery_pointer cursor-pointer' 
        >
         <span> <CiShare2 size={'24px'} /></span>
        </div>
      </div>

      <SwiperCustom slidesPerView={slidesPerView} photos={collectionName} />

      <Modal showModal={showModal} handleModalClose={handleModalClose}>
        <div className='text-black mt-28 ml-8'>
          <CopyToClipboard id={title} />
        </div>
      </Modal>
    </section>
  );
};

export default GalleryItem;