import {
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { curatedAbi } from 'curated-abi';
import { SMART_CONTRACTS } from 'utils/constants';

type UseMintProcessProps = {
  projectId: string;
  quantity: string;
};

type UseMintProcessResult = {
  isMintLoading: boolean;
  isMintStarted: boolean;
  isMinted: boolean;
  mint?: () => void;
};

export const useMintProcess = ({
  projectId,
  quantity,
}: UseMintProcessProps): UseMintProcessResult => {
  const { config } = usePrepareContractWrite({
    abi: curatedAbi,
    address: SMART_CONTRACTS.MINT,
    args: [`${projectId}`, `${quantity}`],
    functionName: '',
  });

  const {
    data: mintData,
    isLoading: isMintLoading,
    write: mint,
    isSuccess: isMintStarted,
  } = useContractWrite(config);

  const { isSuccess: txSuccess } = useWaitForTransaction({
    hash: mintData?.hash,
  });

  return {
    isMintLoading,
    isMintStarted,
    isMinted: txSuccess,
    mint,
  };
};
