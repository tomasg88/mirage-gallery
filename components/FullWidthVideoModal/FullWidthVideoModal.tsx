import { Fragment, useState } from 'react';
import Image from 'next/image';
import { BigPlayButton, Player } from 'video-react';
import { Dialog, Transition } from '@headlessui/react';

export const FullWidthVideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="h-[500px] overflow-hidden my-6 relative">
        <button
          className="absolute inset-0 flex items-center justify-center bg-gray-900/60"
          onClick={openModal}
          type="button"
        >
          <div className="w-20 h-20 duration-300 cursor-pointer hover:scale-110">
            <svg
              fill="none"
              height="78"
              width="78"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M76.5 39v0c0 20.712-16.788 37.5-37.5 37.5v0C18.288 76.5 1.5 59.712 1.5 39v0C1.5 18.288 18.288 1.5 39 1.5v0c20.712 0 37.5 16.788 37.5 37.5Z"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                clipRule="evenodd"
                d="m34.586 26.742 16.175 9.567c2.046 1.208 2.046 4.17 0 5.379l-16.175 9.566c-2.084 1.234-4.717-.27-4.717-2.691v-19.13c0-2.42 2.633-3.924 4.717-2.691v0Z"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </button>
        <Image
          alt="imagen"
          className="object-cover w-full"
          height={500}
          src="/assets/2.jpg"
          width={1200}
        />
      </div>

      <Transition appear as={Fragment} show={isOpen}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white/80 backdrop-blur-lg" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 "
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 "
              >
                <Dialog.Panel className="w-full overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl max-w-7xl rounded-2xl">
                  <Dialog.Title as="h3" className="hidden">
                    About
                  </Dialog.Title>
                  <Player
                    poster="/assets/2.jpg"
                    src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1628057438/encoder/herohdsantuan0001-0250_wpgean.mp4"
                  >
                    <BigPlayButton position="center" />
                  </Player>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
