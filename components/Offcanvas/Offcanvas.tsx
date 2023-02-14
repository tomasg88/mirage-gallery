import React, { useState, useCallback } from "react";
import { slide as Menu } from "react-burger-menu";
import Navigation from "./OffcanvasNavigation";
import ConnectWalletButton from "@/components/ConnectWalletButton/ConnectWalletButton";
export default function Offcanvas() {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = useCallback(() => setOpenMenu(false), []);
  const handleStateChange = useCallback(
    (state : any) => {
      setOpenMenu(state.isOpen);
    },
    [setOpenMenu]
  );

  return (
    <Menu width={260} right isOpen={openMenu} onStateChange={handleStateChange}>
      <Navigation closeMenu={closeMenu} />
      <div className="absolute bottom-0 right-0 m-6">
        <ConnectWalletButton />
      </div>
    </Menu>
  );
}
