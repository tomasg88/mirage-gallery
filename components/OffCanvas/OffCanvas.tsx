import React, { useState, useCallback } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { OffCanvasNavigation } from './OffCanvasNavigation';
import ConnectWalletButton from '@/components/Button/ConnectWalletButton/ConnectWalletButton';

export const OffCanvas = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = useCallback(() => setOpenMenu(false), []);
  const handleStateChange = useCallback(
    (state: any) => {
      setOpenMenu(state.isOpen);
    },
    [setOpenMenu]
  );

  return (
    <Menu width={260} right isOpen={openMenu} onStateChange={handleStateChange}>
      <OffCanvasNavigation closeMenu={closeMenu} />
      <div className="absolute bottom-0 right-0 m-6">
        <ConnectWalletButton />
      </div>
    </Menu>
  );
};
