import { curatedAbi } from 'curated-abi';
import { useEffect, useState } from 'react';
import { Project } from 'types/drops';
import { FunctionNames, ProjectTokenInfoResult } from 'types/web3';
import { SMART_CONTRACTS } from 'utils/constants';
import { useContractRead } from 'wagmi';

export const useReadProcess = ({ projectId }: { projectId: Project['id'] }) => {
  const [parsedData, setParsedData] = useState<ProjectTokenInfoResult | null>(
    null
  );

  // TODO - proper type of smart contract response
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data }: { data: any } = useContractRead({
    abi: curatedAbi,
    address: SMART_CONTRACTS.CLAIM_AND_READ,
    args: [`${projectId}`],
    functionName: FunctionNames.PROJECT_TOKEN_INFO,
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
