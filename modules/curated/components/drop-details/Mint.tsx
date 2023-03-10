import clsx from 'clsx';
import RefreshSvg from 'components/Svgs/RefreshSvg';
import React, { useState } from 'react';
import { Project } from 'types/drops';
import { useAccount } from 'wagmi';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Mint = ({ projectId }: { projectId: Project['id'] }) => {
  const { isConnected } = useAccount();
  const [quantity, setQuantity] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleQuantityChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setQuantity(value);
  };

  const handleMint = () => {
    const quantityNumber = Number(quantity);
    if (isNaN(quantityNumber) || !Number.isInteger(quantityNumber)) {
      setError('Quantity must be an integer number');
      return;
    }
  };

  return (
    <div className="grid w-full px-2 mx-auto my-3 max-w-screen-2xl md:grid-cols-2">
      <div>
        <h2 className="text-2xl text-left">Mint</h2>
        <div className="flex flex-col gap-6 mb-6">
          <label className="flex flex-col w-full mt-6">
            <span className="mb-2 font-sans">Quantity</span>
            <input
              className="p-3 font-sans text-gray-800 bg-gray-100"
              min={0}
              name={'quantity'}
              onChange={handleQuantityChange}
              placeholder="1-10"
              step="1"
              type="number"
              value={quantity}
            />
            <span className="text-sm text-red-600">
              {error !== '' && error}
            </span>
          </label>
        </div>
        <span className="flex items-center justify-start my-6">
          124/250 remaining
          <RefreshSvg className="inline-flex ml-2 cursor-pointer" />
        </span>
        <div>
          <button
            aria-disabled={!isConnected}
            className={clsx(
              'flex items-center justify-center py-3 text-white duration-300 bg-curated px-9',
              {
                disabled: !isConnected,
              }
            )}
            disabled={!isConnected}
            onClick={handleMint}
            type="button"
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  );
};
