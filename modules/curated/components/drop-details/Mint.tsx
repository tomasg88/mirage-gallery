import RefreshSvg from 'components/Svgs/RefreshSvg';
import React from 'react';
import { Drop } from 'types/drops';

export const Mint = ({ project }: { project: Drop['project'] }) => {
  return (
    <div className="grid w-full px-2 my-3  mx-auto max-w-screen-2xl md:grid-cols-2">
      <div>
        <h2 className="text-2xl text-left">Mint</h2>
        <div className="flex flex-col gap-6 mb-6">
          <label className="flex flex-col mt-6">
            <span className="mb-2 font-sans">Project</span>
            <input
              className="w-full p-3 font-sans text-gray-800 bg-gray-100"
              placeholder={project.name}
              type="text"
            />
          </label>
          <label className="flex flex-col w-full mt-6">
            <span className="mb-2 font-sans">Quantity</span>
            <input
              className="p-3 font-sans text-gray-800 bg-gray-100"
              min={0}
              placeholder="1-10"
              type="number"
            />
          </label>
        </div>
        <span className="flex items-center justify-start my-6">
          124/250 remaining
          <RefreshSvg className="inline-flex ml-2 cursor-pointer" />
        </span>
        <div>
          <button
            className="flex items-center justify-center py-3 text-white duration-300 bg-[#920d3d] px-9"
            type="button"
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  );
};
