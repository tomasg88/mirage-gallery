import { curatedAbi } from 'curated-abi';
import { useEffect, useState } from 'react';
import { Project } from 'types/drops';
import { ProjectTokenInfoResult } from 'types/web3';
import { useContractRead, usePrepareContractWrite } from 'wagmi';
import { curatedContractAddress } from './useMintProcess';

export const useReadProcess = ({ projectId }: { projectId: Project['id'] }) => {
  const [parsedData, setParsedData] = useState<ProjectTokenInfoResult | null>(
    null
  );

  const { config } = usePrepareContractWrite({
    abi: curatedAbi,
    address: curatedContractAddress,
    args: [`${projectId}`],
    functionName: '',
  });

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data }: { data: any } = useContractRead({
    ...config,
    args: [`${projectId}`],
    functionName: 'projectTokenInfo',
    watch: true,
  });

  useEffect(() => {
    if (data) {
      setParsedData(data);
    }
  }, [data]);

  /**
   * There are always 50 pieces reserved for claiming
   */
  return {
    isPublicSale: parsedData?.publicActive,
    isEarlySale: parsedData?.earlyActive,
    earlySaleTotal: parsedData?.maxEarly,
    earlySaleRemaining:
      Number(parsedData?.maxEarly) - Number(parsedData?.artworks) - 50,
    // maxArtworks has the entire collection. Total available for minting is maxArtworks - 50
    totalArtworks: parsedData?.maxArtworks,
    remainingForPublicMint:
      Number(parsedData?.maxArtworks) - Number(parsedData?.artworks),
  };
};
