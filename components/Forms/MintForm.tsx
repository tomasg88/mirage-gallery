import clsx from 'clsx';
import { useMintProcess } from 'hooks/useMintProcess';
import { useReadProcess } from 'hooks/useReadProcess';
import React, { useCallback, useEffect, useState } from 'react';
import { Project } from 'types/drops';

export const MintForm = ({ projectId }: { projectId: Project['id'] }) => {
  const [quantity, setQuantity] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { isMintLoading, isMintStarted, isMinted, mint } = useMintProcess({
    projectId,
    quantity,
  });

  const {
    isPublicSale,
    isEarlySale,
    earlySaleTotal,
    earlySaleRemaining,
    remainingForPublicMint,
    totalArtworks,
  } = useReadProcess({ projectId });

  const handleQuantityChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setError('');
      setQuantity(value);
    },
    [setError, setQuantity]
  );

  useEffect(() => {
    if (isEarlySale) {
      setQuantity('1');
      setError('Only one artwork can be minted during presale');
    }
  }, [isEarlySale, setQuantity]);

  // Quantity is always 1 if we are on pre-sale
  const handleMint = useCallback(() => {
    const quantityNumber = Number(quantity);
    if (isNaN(quantityNumber) || !Number.isInteger(quantityNumber)) {
      setError('Quantity must be an integer number');
      return;
    }

    if (mint) {
      mint();
    }
  }, [mint, quantity, setError]);

  const isMintButtonDisabled = isMintLoading || isMintStarted;

  return (
    <div className="grid w-full px-2 mx-auto my-3 max-w-screen-2xl md:grid-cols-2">
      <div>
        {isEarlySale && <h2>Early Sale is Live!</h2>}
        {isPublicSale && <h2>Public Sale is Live</h2>}
        <div className="flex flex-col gap-6 mb-6">
          <label className="flex flex-col w-full mt-6">
            <span className="mb-2 font-sans">Quantity</span>
            <input
              className={`p-3 font-sans text-gray-800 bg-gray-100 ${
                isEarlySale ? 'disabled' : ''
              }`}
              disabled={isEarlySale}
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
        <span className=" items-center justify-start my-6">
          {isPublicSale && (
            <p>{`${remainingForPublicMint}/${totalArtworks} remaining`}</p>
          )}
          {isEarlySale && (
            <p>{`${earlySaleRemaining}/${earlySaleTotal} remaining`}</p>
          )}
        </span>
        <div className="flex justify-between items-center">
          <button
            aria-disabled={isMintButtonDisabled}
            className={clsx(
              'flex items-center justify-center py-3 text-white duration-300 bg-curated px-9',
              {
                disabled: isMintButtonDisabled,
              }
            )}
            disabled={isMintButtonDisabled}
            onClick={handleMint}
            type="button"
          >
            Mint
          </button>
          <p>
            {isMintLoading && 'Waiting for approval'}
            {isMintStarted && 'Minting...'}
            {isMinted && 'Congratulations. You minted! Check your wallet'}
          </p>
        </div>
      </div>
    </div>
  );
};
