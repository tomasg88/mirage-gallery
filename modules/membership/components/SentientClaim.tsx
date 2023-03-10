import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

// Any curated individual projects or dreamers
const project = [{ name: 'Curated' }, { name: 'Dreamers' }, { name: 'Crypto' }];

export default function MembershipSentientClaim() {
  const [selected, setSelected] = useState(project[0]);

  return (
    <div>
      <form>
        <label className="flex flex-col">
          <span className="mb-2 font-sans">Project</span>

          <Listbox onChange={setSelected} value={selected}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-left bg-gray-100 cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block font-sans text-gray-600 truncate">
                  {selected.name}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                  <svg
                    className="w-3 h-3 text-gray-600"
                    fill="none"
                    height="6"
                    viewBox="0 0 8 6"
                    width="8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666016 1.33337L3.99935 4.66671L7.33268 1.33337"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full py-3 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {project.map((person, personIdx) => (
                    <Listbox.Option
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? 'bg-amber-100 text-amber-900'
                            : 'text-gray-900'
                        }`
                      }
                      key={personIdx}
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate font-sans ${
                              selected ? 'font-normal' : 'font-medium'
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 font-sans text-amber-600">
                              <svg
                                className="w-5 h-5"
                                height="32"
                                viewBox="0 0 24 24"
                                width="32"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4l-8 8Z"
                                  fill="#888888"
                                />
                              </svg>
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </label>
      </form>
      <div className="flex flex-col gap-6 my-6 md:flex-row">
        <label className="flex flex-col w-full ">
          <span className="mb-2 font-sans">Input membership ID</span>
          <input
            className="p-3 font-sans text-gray-800 bg-gray-100"
            placeholder="(0-49)"
            type="number"
          />
        </label>
        <label className="flex flex-col ">
          <span className="mb-2 font-sans">Quantity</span>
          <input
            className="p-3 font-sans text-gray-800 bg-gray-100"
            placeholder="1"
            type="number"
          />
        </label>
      </div>
      <div>
        <button
          className="flex items-center justify-center py-3 text-white duration-300 bg-[#E2B310] px-9"
          type="button"
        >
          Claim
        </button>
      </div>
    </div>
  );
}
